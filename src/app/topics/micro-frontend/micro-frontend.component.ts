import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
@Component({
  selector: 'app-micro-frontend',
  templateUrl: './micro-frontend.component.html',
  styleUrls: ['./micro-frontend.component.scss']
})
export class MicroFrontendComponent implements OnInit{
  elementUrl: string = "http://localhost:4300/registration/registration-fe.js";
  userForm = {
    name: "",
    role: "",
    skills: ""
  };
  ngOnInit(): void {
      fromEvent(window, 'userRegisteredEvent').subscribe((event: any) => {
        this.userForm.name = event.detail.name;
        this.userForm.role = event.detail.role;
        this.userForm.skills = event.detail.skills;
      })
  }
}
