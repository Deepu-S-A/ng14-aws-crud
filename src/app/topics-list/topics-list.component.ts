import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {OnInit} from '@angular/core';
import { topic } from '../models/topic.model';
@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {
  constructor(public dataService: DataService){}

  topics: topic[] = [];

  ngOnInit(){
  }
}
