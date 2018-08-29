import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { GithubUsers } from '../providers/github-users/github-users';
import {HttpClient, HttpClientModule} from "@angular/common/http";
// import {UserDetailsPage} from "../pages/user-details/user-details";

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    // UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    // UserDetailsPage
  ],
  providers: [GithubUsers] // Add GithubUsers provider
})
export class AppModule {}
