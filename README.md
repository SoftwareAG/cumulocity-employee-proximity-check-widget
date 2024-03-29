# Cumulocity Widget - Employee Proximity check widget[<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-employee-proximity-check-widget/releases/download/1.0.0/gp-employee-proximity-check-runtime-widget-1.0.0.zip)

##  Overview
This is an Angular 8 Chart Widget designed for Smart Social Distancing Demo. this widget displays list of Employee and its associated tag that came in contact with a particular Employee.

To deliver the expected functionality one needs to set the following configuration parameters:

Group(Devices) specific ExternalID Type (input - required)
Example: c8y_TrackableId

Group(Devices) specific Event Type (input- required)
Example: c8y_AssetTagProximityUpdateFromParent

To deliver the expected functionality one needs to set the following as a query parameter in widget  UI.

Unique Id(required) - This takes employee name as input
Days(required)


## Features
*  **Supports reload chart:** The widget gets a list of Employee and its associated tag that came in contact with a provided particular Employee 
*  **Supports breaches by days:** Based on widget UI input.
*  **Supports breaches by the particular employee:** Based on widget UI input.


## Supported Product Versions

Cumulocity 1006.11.0 onward (should also work for an older version of Cumulocity)

  
**Supported Cumulocity Environments:**
  
*  **App Builder:** Tested with Cumulocity App Builder version 1.2.2.
  
*  **Cockpit Application:** Tested with Cockpit 1006.11.0 with [Patch Fix](https://www.npmjs.com/package/cumulocity-runtime-widget-loader).

**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)

**External dependencies:**

```

"@angular/cdk": "8.2.3"

"@angular/material": "8.2.3",

"chart.js": "^2.9.3",

"ng2-charts": "^2.3.2",

"@c8y/ngx-components": "^1006.6.8",

"@c8y/ng1-modules": "^1006.6.8",

"@c8y/style": "^1006.6.8",

 "material-design-icons": "^3.0.1",
 
"moment": "^2.24.0",


```
## Installation
## Runtime Widget Installation (Without Application Deployment)

* This widget support runtime deployment. Download [Runtime Binary](https://github.com/SoftwareAG/cumulocity-employee-proximity-check-widget/releases/download/1.0.0/gp-employee-proximity-check-runtime-widget-1.0.0.zip) and use application builder to install your runtime widget.

**Installation Steps For App Builder:**

**Note:** If you are new to App Builder or not yet downloaded/clone app builder code then please follow [App builder documentation(Build Instructions)](https://github.com/SoftwareAG/cumulocity-app-builder) before proceeding further.

1. Open Your existing App Builder project and install external dependencies by executing the below command or install it manually.

 - chart.js version 2.9.3

     Installation command: ```npm i chart.js@2.9.3 ``` 
   
 - ng2-charts version 2.3.2

     Installation command: ```npm i ng2-charts@2.3.2 ``` 
   
 - material-design-icons version 3.0.1 

     Installation command: ```npm i material-design-icons@3.0.1``` 

- moment version 2.24.0

     Installation command: ```npm i moment@2.24.0 ``` 


2. Grab the Employee Proximity check  Widget **[Latest Release Binary](https://github.com/SoftwareAG/cumulocity-employee-proximity-check-widget/releases/download/1.0.0/gp-employee-proximity-check-1.0.0.tgz)**  (or)  create your own binary file by following  [Build Instructions
](## Build Instructions).

3. Install the Binary file in the app builder.

```
npm i <binary  file  path>/gp-lib-employee-proximity-check-1.0.0.tgz
```

4. Open index.less located at /cumulocity-app-builder/ui-assets/

5. Update index.less file with the below theme. Import at the first line in file/beginning of the file(Please ignore this step if it already exists).

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```
6. Import  GpEmployeeProximityCheckModule in app.module.ts or custom creates a module for example cumulocity-app-builder\custom-widgets\custom-widgets.module.ts  and also place the imported Module under `@NgModule`.

```

import {GpEmployeeProximityCheckModule} from gp-employee-proximity-check';

@NgModule({

  imports: [

    GpEmployeeProximityCheckModule  

      ]

  })

```

7.  Congratulation! Installation is now completed. Now you can run app builder locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy
```

**Installation Steps For Cockpit:**

**Note:** If you are new to Cockpit or not yet created any cockpit application then please follow [Web SDK for Angular](https://cumulocity.com/guides/web/angular/) before proceeding further.

1. Open Your existing Cockpit/Cumulocity project and install external dependencies by executing the below command or install it manually.

 - chart.js version 2.9.3

     Installation command: ```npm i chart.js@2.9.3 ``` 
   
 - ng2-charts version 2.3.2

     Installation command: ```npm i ng2-charts@2.3.2 ``` 
   
 - Angular Material version 8.2.3

     Installation command: ```npm i @angular/material@8.2.3 ``` 

 - material-design-icons version 3.0.1 

     Installation command: ```npm i material-design-icons@3.0.1``` 

- moment version 2.24.0

     Installation command: ```npm i moment@2.24.0 ``` 


2. Grab the Employee Grid Widget **[Latest Release Binary]((https://github.com/SoftwareAG/cumulocity-employee-proximity-check-widget/releases/download/1.0.0/gp-employee-proximity-check-1.0.0.tgz)** (or)  create your own binary file by following  [Build Instructions
](## Build Instructions).

3. Install the Binary file in the app builder.

```
npm i <binary  file  path>/gp-employee-proximity-check-1.0.0.tgz
```

**Note:** If you don't find the branding folder then please follow [Cumulocity Branding](https://cumulocity.com/guides/web/angular/#branding)

4. Open branding.less located at /cumulocity-app/branding/

5. In `branding.less ` import the following design templates. Import at first line/beginning of the file(Please ignore this step if it already exists).

  ```

  @import '~@angular/material/prebuilt-themes/indigo-pink.css';

  @import '~@c8y/style/main.less';

  @import '~@c8y/style/extend.less';
  ```
6. Import GpEmployeeGridModule in app.module.ts and also place the imported Module under `@NgModule`.

  ```

import {GpEmployeeProximityCheckModule} from gp-employee-proximity-check';

@NgModule({

  imports: [

    GpEmployeeProximityCheckModule  

      ]

  })

  ```

7.  Congratulation! Installation is now completed. Now you can run your app locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy
```

## Build Instructions

**Note:** It is only necessary to follow these instructions if you are modifying/extending this widget, otherwise see the [Installation Guide](#Installation).
  
**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)

**Instructions**

1. Clone the repository:
```
git clone  https://github.com/SoftwareAG/cumulocity-markdown-widget.git
```
2. Change directory:

  ```cd gp-proximity-check```

3. run npm i command to install all library files specified in source code

  ```npm i ``` 

4. run npm run buildMinor command to create a binary file under dist folder

  ```npm run buildMinor ``` 

5. (Optional) Local development server:
  
  ```npm start```

6. Build the app:

  ```npm run build```

7. Deploy the app:

  ```npm run deploy```

## QuickStart

This guide will teach you how to add a widget in your existing or new dashboard.

1. Open the Application Builder from the app switcher (Next to your username in the top right)

2. Click Add application

3. Enter the application details and click Save

4. Select Add dashboard

5. Click Blank Dashboard

6. Enter the dashboard details and click Save

7. Select the dashboard from the navigation

8. Check for your widget and test it out.



Congratulations! Employee Proximity Check Widget is configured.
  
## User Guide
![Employee_Proximity_check_Conf](https://user-images.githubusercontent.com/70568133/101735179-7cc3df80-3ae7-11eb-89bc-663559eaaceb.PNG)

1.Group(Devices) specific ExternalID Type (input - required)
Example: c8y_TrackableId

2.Group(Devices) specific Event Type (input- required)
Example: c8y_AssetTagProximityUpdateFromParent

## Troubleshooting

  
This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
  
_____________________
  
For more information you can Ask a Question in the [TECHcommunity Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).
  
  
You can find additional information in the [Software AG TECHcommunity](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).
