import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InventoryService, EventService, IdentityService } from '@c8y/client';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { from, Subject, Observable, interval } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { AppStateService } from '@c8y/ngx-components';

@Component({
  selector: 'lib-gp-lib-employee-proximity-check',
  templateUrl : './gp-lib-employee-proximity-check.html',
  styleUrls: ['gp-lib-employee-proximity-check.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GpLibEmployeeProximityCheckComponent implements OnInit {

  @Input() config;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  date: any = new Date();
  deviceId: any;
  eventData = [];
  progressbar = 0;
  providedDays: number;
  AlertsCount = 0;
  realtimeState = true;
  TagsAtRisk: Tags[] = [];
  responseData: any;
  unsubscribeRealTime$ = new Subject<void>();
  sub: any;
  dataLoadedUI: Promise<boolean>;
  callAPI = false;
  response: any;
  searchDeviceName = '';
  devicesAll: any;
  displayedColumns: string[] = ['proximitEmployeeName', 'time'];
  dataSource = new MatTableDataSource<Tags>([]);

  constructor(
    public datepipe: DatePipe,
    public identity: IdentityService,
    public events: EventService,
    public inventory: InventoryService,
    private http: HttpClient,
    private appStateService: AppStateService,
  ) { }

  async ngOnInit() {

  this.TagsAtRisk.length = 0;
  await this.fetchEvents();
  this.callAPI = false;

  this.sub = interval(120000)
              .subscribe((val) => {
                    this.fetchEvents(); });
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  }

  async refresh() {
    if (this.realtimeState) {
      this.TagsAtRisk = [];
      this.dataSource.data = [];
      this.unsubscribeRealTime$.next();
      this.realtimeState = false;
      if (!this.callAPI) {
      this.callAPI = true;
      await this.fetchEvents();
      this.callAPI = false;
    }
      this.realtimeState = true;
    } else {
        this.callAPI = true;
        this.TagsAtRisk = [];
        if (!this.callAPI) {
        this.callAPI = true;
        await this.fetchEvents();
        this.callAPI = false;
      }

    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  toggle() {
     this.realtimeState = !this.realtimeState;
     if (this.realtimeState) {
              this.fetchEvents();
     } else {
       this.unsubscribeRealTime$.next();
     }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
     this.unsubscribeRealTime$.next();
     this.unsubscribeRealTime$.complete();
  }

  async fetchEvents() {
  // tslint:disable-next-line: triple-equals
  if (this.searchDeviceName != '' && this.providedDays != null) {
   this.TagsAtRisk.length = 0;

   this.AlertsCount = 0;
   const now = moment();
   const identity: IExternalIdentity = {
    type: this.config.externalIdType,
    externalId: this.searchDeviceName
  };
   const identitydetails = await this.identity.detail(identity);
   this.deviceId = identitydetails.data.managedObject.id;
   const inventory = await this.inventory.detail(this.deviceId);
   this.response = inventory.data;
   // tslint:disable-next-line: prefer-const
   let tempTags: Tags[] = [];
   const filter: object = {
      pageSize: 2000,
      withTotalPages: true,
      source: this.deviceId,
      type: this.config.eventType,
      dateTo: now.add(1, 'days').format('YYYY-MM-DDTHH:mm:ssZ'),
      dateFrom: now.add(-this.providedDays, 'days').format('YYYY-MM-DD'),
    };

   (async () => {
      const {data, res, paging} = await this.events.list(filter);
      this.eventData = [...data];
      this.AlertsCount = this.eventData.length;
      this.eventData.forEach(event => {
        const temp: Tags = {
          id: event.source.id,
          name: event.source.name,
          // tslint:disable-next-line: max-line-length
          proximitEmployeeId: event.poximitTrackablesInternalIds === undefined ? event.proximityTrackablesInternalIds : event.poximitTrackablesInternalIds,
          // tslint:disable-next-line: max-line-length
          proximitEmployeeName: event.poximiTrackableExternalIds === undefined ? event.proximityTrackableExternalIds : event.poximiTrackableExternalIds,
          // tslint:disable-next-line: max-line-length
          proximitAssetId: event.poximitAssetTagInternalId === undefined ? event.proximityAssetTagInternalId : event.poximitAssetTagInternalId,
          type: event.type,
          time: event.time

        };
        this.responseData = temp;
        if (temp.proximitEmployeeName.length !== 0 ) {tempTags.push(temp);
      }
      });
      this.dataSource.data = [];
      this.dataSource.data = tempTags;
    })();


  }

  }

  exportReport() {
    this.progressbar = 1;
    const reportData = this.dataSource.data;
    reportData.forEach((x) => {
      x.time = moment(x.time).format('DD/MM/YYYY HH:mm:ss');
    });
    if (this.appStateService.currentUser.value.email) {
      const exportData = {
        data: reportData,
        request: {
          emplname: this.searchDeviceName,
          noOfDays: this.providedDays,
          emailId: this.appStateService.currentUser.value.email
        }

      };
      console.log(exportData);

      this.http.post(this.config.placeOrderUrl, exportData).subscribe((val) => {
        alert('Submitted Successfully');
        this.progressbar = 0;
      });
    } else {
      alert('Unable to fetch user details');
    }


  }
}



export interface Tags {
  id: string;
  name: string;
  proximitEmployeeId: string;
  proximitEmployeeName: string;
  proximitAssetId: string;
  time: string;
  type: string;

}

export interface IExternalIdentity {
  type: string;
  externalId: string;
}
