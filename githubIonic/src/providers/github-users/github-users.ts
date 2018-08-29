import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from "../../models/user";

/*
  Generated class for the GithubUsersProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubUsers {

  githubApiUrl = 'https://api.github.com';
  constructor(public http: HttpClient ) { }

  //Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map((data:User[]) => {
        console.log('users', data)
        return data;
      });
  }

    loadDetails(login: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map((data: User[])=> {
        return data;
      })
  }
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .map((data: User[]) => {
        return data;
      })
  }
}

