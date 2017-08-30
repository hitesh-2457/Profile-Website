import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AlertService } from "../alert-component/alert-service/alert.service";

@Injectable()
export class EmailServiceService {

  constructor(private http:Http, private alertService:AlertService) { }

  sendMail(user,msg){
    console.log("Email Service Works!!!");
    this.alertService.clear();

    

    this.alertService.success("Your message was successfully sent to Hitesh Gupta.");
  }
}
