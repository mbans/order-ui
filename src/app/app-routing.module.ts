import { NgModule, Query } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportingComponent } from './reporting/reporting/reporting.component';
import { QueryComponent } from './qery/query/query.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'query', component: QueryComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
