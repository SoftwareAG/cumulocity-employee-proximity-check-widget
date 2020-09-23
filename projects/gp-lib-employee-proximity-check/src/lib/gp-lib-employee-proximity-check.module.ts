import { NgModule } from '@angular/core';
import { GpLibEmployeeProximityCheckComponent } from './gp-lib-employee-proximity-check.component';
import {CoreModule, HOOK_COMPONENTS} from '@c8y/ngx-components';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule, MatInputModule, MatFormFieldModule,MatTableModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProximityCheckConfigComponent } from './gp-lib-employee-proximity-check-config.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GpLibEmployeeProximityCheckComponent, ProximityCheckConfigComponent],
  imports: [
      CoreModule,
      HttpClientModule,
      MatTableModule,
      MatButtonModule,
      MatSortModule,
      MatPaginatorModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule  ],
  exports: [GpLibEmployeeProximityCheckComponent, ProximityCheckConfigComponent],
  entryComponents: [GpLibEmployeeProximityCheckComponent, ProximityCheckConfigComponent ],

  providers: [
    {
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: {
        id: 'proximity.widget',
        label: 'Employee Proximity Check',
        description: 'Proximity  Dashboard - Displays interaction of Employee with other employees',
        component: GpLibEmployeeProximityCheckComponent,
        configComponent: ProximityCheckConfigComponent,
        data: {
            ng1: {
                options: {
                noDeviceTarget: true,
                }
            }
        }
    }
    }],
})
export class GpLibEmployeeProximityCheckModule { }
