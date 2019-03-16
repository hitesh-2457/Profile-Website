import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NGValidators } from 'ng-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg={
    subject: '',
    body: ''
  }
  user={
    name: '',
    email: ''
  }
  contactForm: any;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'Name': new FormControl(this.user.name, Validators.required),
      'Email': new FormControl(this.user.email, Validators.required),
      'Subject': new FormControl(this.msg.subject, Validators.required),
      'Body': new FormControl(this.msg.body)
    });
  }

  constructor() { }

  formReset() {
    this.msg={
      subject: '',
      body: ''
    }
    this.user={
      name: '',
      email: ''
    }
  }

  formSubmit() {
    console.log(this.user);
    console.log(this.msg);
    }
}
