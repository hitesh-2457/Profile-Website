import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from "./email-service/email-service.service";
import { AlertService } from "./alert-component/alert-service/alert.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailServiceService,AlertService]
})
export class ContactComponent implements OnInit {

  user = null;
  msg = null;
  constructor(private emailService: EmailServiceService) { }

  ngOnInit() {
    this.user = {
      name: '',
      email: ''
    }
    this.msg = {
      subject: '',
      body: ''
    }
  }

  formReset() {
    this.user = {
      name: '',
      email: ''
    }
    this.msg = {
      subject: '',
      body: ''
    }
  }

  formSubmit() {
    console.log(this.user);
    console.log(this.msg);
    this.emailService.sendMail(this.user,this.msg);
    }
}
