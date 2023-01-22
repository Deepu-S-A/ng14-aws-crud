import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { DataService } from 'src/app/services/data.service';
import { topic } from '../models/topic.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  topics: topic[] = [];
  loginText:string = "login";
  constructor(public auth: AuthService, public dataService: DataService) {}
  ngOnInit(): void {
    //This code is not needed as we are directly 
    /*this.dataService.getTopicsList().subscribe((res: topic[]) => {
      this.topics = [...res];
    });*/
  }
}
