import { Injectable } from "@angular/core";
import { DataService } from "./services/data.service";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn: 'root'})
export Class DataService{
    value:string = "";
 constructor(private http: HttpClient){

 }
 getApi(url: string) {
     this.http.get(url);
 }
}

//Componnet
import {DataService} from './data.service';


formdata = ({[validatorUser]})


constructor(private dataService: DataService) {
    this.dataService.getApi('url.com').subscribe(res=>console.log(res))
}

ngOninit(){
    this.formData
}

validatorUser(){

}


