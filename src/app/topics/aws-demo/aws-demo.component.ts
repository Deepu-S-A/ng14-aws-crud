import { Component } from '@angular/core';
import { AwsService } from '../../services/aws.service';
import { User } from '../../models/user.modal';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-aws-demo',
  templateUrl: './aws-demo.component.html',
  styleUrls: ['./aws-demo.component.scss']
})
export class AwsDemoComponent {
  user!: User;
  users: User[] = [];
  userForm!: FormGroup;
  displayedColumns: string[] = ['ID', 'Name', 'Skills', 'Designation', 'CTC'];

  constructor(private aws: AwsService){
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      skills: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      ctc: new FormControl('', [Validators.required])
    });
    //this.getAllFromAWS();
  }
  resetUser(){
    this.user.name = this.user.designation = this.user.skills = this.user.ctc = "";
  }
  createDynamoDBtable(){
    this.aws.createTableInDynamoDB("allusers").subscribe(res=>console.log(res));
  }
  saveToAWS(){
    if(this.userForm.valid) {
      this.aws.saveToDynamoDB(this.userForm.getRawValue()).subscribe(res=> {
        if(res.message === "success") {
          this.users.push(this.userForm.getRawValue());
        }
      });
    }
  }
  getFromAWS(id: number){
    this.aws.getFromDynamoDB(id).subscribe(res=>this.users);
  }
  getAllFromAWS(){
    this.aws.getAllUsers().subscribe(res=>{
      this.users = [...res.Items];
    });
  }
  deleteFromAWS(id: number){
    this.aws.deleteFromDynamoDB(id).subscribe(res=>console.log(res));
  }
}
