import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'Employee-proximity-check-config',
  templateUrl: './gp-lib-employee-proximity-check-config.component.html',
  styleUrls: ['./gp-lib-employee-proximity-check-config.component.css']
})
export class ProximityCheckConfigComponent implements OnInit {
  @Input() config: any = {}; 
  constructor() { }

  ngOnInit() {
  }
}
