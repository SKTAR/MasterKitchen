import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
    url = '';
  constructor(
    protected httpClient: HttpClient) {

  }

  public testGet() {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
   return  this.httpClient.get(this.url);
  }

  public testGetUser() {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
   return  this.httpClient.get<User>(this.url);
  }

}
