import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from "./timeline/timeline.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const APP_ROUTES: Routes = [

    {
        path: '', component: LandingPageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'About', component: AboutComponent },
            { path: 'Timeline', component: TimelineComponent },
            { path: 'Contact', component: ContactComponent }
        ]
    },

    // { path: '**', redirectTo: ''},
    // {path:'', redirectTo:'/home', pathMatch:'full'}
];

export const appRoutingModule = RouterModule.forRoot(APP_ROUTES);