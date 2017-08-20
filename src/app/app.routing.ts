import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from "./resume/resume.component";
import { WorkComponent } from "./work/work.component";

const APP_ROUTES: Routes = [
    { path: 'About', component: AboutComponent },
    { path: 'Timeline', component: WorkComponent },
    { path: 'Resume', component: ResumeComponent },
    { path: 'Contact', component: ContactComponent },

    { path: '', component: HomeComponent },

    // { path: '**', redirectTo: '/'},
    // {path:'', redirectTo:'/home', pathMatch:'full'}
];

export const appRoutingModule = RouterModule.forRoot(APP_ROUTES);