import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewsComponent } from './pages/news/news.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { RouteGuardService } from "./services/route-guard.service";
import { ComposeComponent } from './pages/compose/compose.component';
import { InboxFilterComponent } from './pages/inbox-filter/inbox-filter.component';
import { MedicalInfoComponent } from './pages/medical-info/medical-info.component';
import { DashboardComponent} from "./pages/dashboard/dashboard.component";
import { SupportComponent} from "./pages/support/support.component";
import { TicketsComponent } from './pages/tickets/tickets.component';
import {MainComponent} from "./pages/admin/main/main.component";
import {EditComponent} from "./pages/admin/edit/edit.component";
import {CreateComponent} from "./pages/admin/create/create.component";


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'profiles', component: ProfilesComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  },
  { path:'signup', component: SignupComponent },
  { path:'profile/:id/grades', component: ProfileComponent },
  { path:'profile/:id/medical-info', component: MedicalInfoComponent },
  { path:'profile/:id', component: ProfileComponent },
  { path:'inbox/:id', component: InboxComponent },
  {path:'inbox-filter/:id', component:InboxFilterComponent},
  { path:'profile/:id', component: ProfileComponent },
  { path:'news', component: NewsComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  },
  { path:'compose', component: ComposeComponent },
  { path:'dashboard', component: DashboardComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  },

  { path:'admin/main', component: MainComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['5'] }
  },
  { path:'admin/edit/:id/:role', component: EditComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['5'] }
  },
  { path:'admin/create', component: CreateComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['5'] }
  },
  { path:'support', component: SupportComponent,
  canActivate: [RouteGuardService],
  data: { expectedRole: ['1', '2', '3', '4', '5'] }
 },
 { path:'tickets', component: TicketsComponent,
   canActivate: [RouteGuardService],
   data: { expectedRole: ['5'] }
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
