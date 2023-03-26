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

import {DashboardComponent} from "./pages/dashboard/dashboard.component";

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
  { path:'profile/:id', component: ProfileComponent },
  { path:'inbox/:id', component: InboxComponent },
  { path:'news', component: NewsComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  },
<<<<<<< HEAD
  { path:'compose', component: ComposeComponent }
=======
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  }
>>>>>>> 0e71900602b1b8c8338f53f67be173ece8304b0a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
