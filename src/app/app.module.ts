import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { QueryComponent } from './qery/query/query.component';
import { ReportingComponent } from './reporting/reporting/reporting.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { ConfigChangeComponent } from './config-change/config-change.component';
import { ReportingDashboardComponent } from './reporting/reporting-dashboard/reporting-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    QueryComponent,
    ReportingComponent,
    SettingsComponent,
    UserComponent,
    ConfigChangeComponent,
    ReportingDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
