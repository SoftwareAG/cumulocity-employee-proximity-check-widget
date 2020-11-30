/**
 * Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { GpEmployeeProximityCheckComponent } from './gp-employee-proximity-check.component';
import {CoreModule, HOOK_COMPONENTS} from '@c8y/ngx-components';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule, MatInputModule, MatFormFieldModule, MatTableModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { ProximityCheckConfigComponent } from './gp-employee-proximity-check-config.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as preview from './preview-image';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [GpEmployeeProximityCheckComponent, ProximityCheckConfigComponent],
  imports: [
      CoreModule,
      HttpClientModule,
      MatTableModule,
      MatButtonModule,
      MatSortModule,
      MatPaginatorModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule  ],
  exports: [GpEmployeeProximityCheckComponent, ProximityCheckConfigComponent],
  entryComponents: [GpEmployeeProximityCheckComponent, ProximityCheckConfigComponent ],

  providers: [
    DatePipe,
    {
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: {
        id: 'proximity.widget',
        label: 'Employee Proximity Check',
        previewImage: preview.previewImage,
        description: 'Proximity  Dashboard - Displays interaction of Employee with other employees',
        component: GpEmployeeProximityCheckComponent,
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
export class GpEmployeeProximityCheckModule { }
