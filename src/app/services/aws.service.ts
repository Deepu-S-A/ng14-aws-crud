import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user.modal';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})

export class AwsService {
  serverBaseUrl = "http://localhost:3200/";
  constructor(private http: HttpClient){}

  saveToDynamoDB(user: User){
    return this.http.post<any>(this.serverBaseUrl + 'save-to-dynamodb', {
      params: { user }
    });
  }
  getFromDynamoDB(userID: number){
    return this.http.get<any>(this.serverBaseUrl + 'get-from-dynamodb', {params: {'id': 5002}})
  }
  getAllUsers() {
    return this.http.get<any>(this.serverBaseUrl + 'get-all-users');
  }
  deleteFromDynamoDB(userID: number){
    return this.http.delete<any>(this.serverBaseUrl+'delete-from-dynamodb', {params: {'id': 5001}})
  }
  createTableInDynamoDB(table: string){
    return this.http.post<any>(this.serverBaseUrl + 'create-dynamodb-table', {params: {'table': table}})
  }
}