import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { TimelineComponent } from './work/timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsComponent } from './about/skills/skills.component';
import { TimelineScribbleComponent } from './work/timeline-scribble/timeline-scribble.component';
import { ResumeComponent } from "./about/resume/resume.component";
import { AlertComponent } from './contact/alert-component/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    TimelineComponent,
    HomeComponent,
    LandingPageComponent,
    SkillsComponent,
    TimelineScribbleComponent,
    ResumeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
