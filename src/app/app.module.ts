import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './about/skills/skills.component';
import { ResumeComponent } from "./about/resume/resume.component";
import { AlertComponent } from './contact/alert-component/alert/alert.component';
import { AchivementsComponent } from './about/achivements/achivements.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    TimelineComponent,
    HomeComponent,
    SkillsComponent,
    ResumeComponent,
    AlertComponent,
    AchivementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
