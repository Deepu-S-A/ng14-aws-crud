import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, subscribeOn, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy{
  initiateBehaviourSubject = new BehaviorSubject<string>("Initial BS value");
  initiateReplaySubject = new ReplaySubject<string>(3, 2000);
  textFromBS:string = "Test BS";
  textFromRS:string = "Test RS";
  bsCounter = 0;
  rsCounter = 0;
  accountInfoKeys: any;
  accountInfo:any;

  constructor(public ds: DataService) {

  }

  bsSubs!: Subscription;
  rsSubs!: Subscription;

  ngOnInit(){
    this.initiateBS();
    this.initiateBS();
    this.initiateBS();
    this.initiateRS();
    this.initiateRS();
    this.initiateRS();
    this.bsSubs = this.initiateBehaviourSubject.subscribe(value => this.textFromBS+= value);
    this.rsSubs = this.initiateReplaySubject.subscribe(value => this.textFromRS += "\n" + value);
  }

  initiateBS() {
    this.initiateBehaviourSubject.next("BS Value " + (++this.bsCounter));
  }

  initiateRS() {
    this.initiateReplaySubject.next("RS Value " + (++this.rsCounter));
  }

  initiateGetApi(){
    this.ds.getApi('DocManagement/GetMyAccount').subscribe((accountInfo:any) => {
        this.accountInfo = accountInfo.data;
        this.accountInfoKeys = Object.keys(this.accountInfo).slice(0,3);
        console.log(this.accountInfoKeys);
      }
    );
  }

  ngOnDestroy(){
    this.bsSubs.unsubscribe();
    this.rsSubs.unsubscribe();
  }
}
