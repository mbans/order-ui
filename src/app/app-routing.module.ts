import { NgModule, Query } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportingComponent } from './reporting/reporting/reporting.component';
import { QueryComponent } from './qery/query/query.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { ConfigChangeComponent } from './config-change/config-change.component';
import { ReportingDashboardComponent } from './reporting/reporting-dashboard/reporting-dashboard.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'query/:cache', component: QueryComponent },
  { path: 'report/:report', component: ReportingComponent },
  { path: 'config-change', component: ConfigChangeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'user', component: UserComponent },
  { path: 'reporting-dashboard', component: ReportingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
