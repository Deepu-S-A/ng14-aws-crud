import { HttpClient, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from '../models/user.modal';

@Injectable({providedIn: 'root'})

export class NodeService {
  serverBaseUrl = "http://localhost:3200/";
  constructor(private http: HttpClient){}

  uploadFileToNodeServer(formData: FormData) {
    return this.http.post<any>('http://localhost:3000/upload-file', formData);
  }
  getNodeAPI(url: string, filterText: string){
    let params = new HttpParams().set("filter", filterText);
    const URL = this.serverBaseUrl + url;
    return this.http.get(URL, {headers: {}, params: params});
  }
}