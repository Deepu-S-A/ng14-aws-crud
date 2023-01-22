import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, map} from 'rxjs';
import { topic } from '../models/topic.model';
@Injectable({providedIn: 'root'})

export class DataService {
  baseUrl: string = 'http://ezyhostings-001-site1.dtempurl.com/api/';
    topics: topic[] = [
    //{name: 'Pipe', link: '/pipes'},
    {name: 'File upload', link: '/file-upload'},
    //{name: 'Subjects', link: '/subjects'},
    {name: 'Rxjs-Mergemap', link: '/mergemap'},
    {name: 'Rxjs-debounce', link: '/debounce'},
    {name: 'Micro-frontend', link: '/micro-frontend'},
    {name: 'AWS-CRUD', link: '/aws-demo'},
    
  ];
  serverBaseUrl = "http://localhost:3200/";

  constructor(private http: HttpClient){}

  getTopicsList() : Observable<topic[]> {
    return of(this.topics);
  }

  getTopicListFromServer() {
    return this.http.get(this.serverBaseUrl + 'get-topics')
  }

  getApi(url: string){
    return this.http.get(this.baseUrl+url);
  }
}

