import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewsComponent } from './pages/news/news.component';
<<<<<<< HEAD
import { InboxComponent } from './pages/inbox/inbox.component';
=======
import { RouteGuardService } from "./services/route-guard.service";
>>>>>>> 27de6452c9c01b18fe82327094c8b625885faf86

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'profiles', component: ProfilesComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  },
  { path:'signup', component: SignupComponent },
  { path:'profile/:id/grades', component: ProfileComponent },
  { path:'profile/:id', component: ProfileComponent },
  { path:'', redirectTo: 'login', pathMatch: 'full' },
<<<<<<< HEAD
  { path:'inbox/:id', component: InboxComponent },
  { path:'news', component: NewsComponent }
=======
  { path:'news', component: NewsComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: ['1', '2', '3', '4', '5'] }
  }
>>>>>>> 27de6452c9c01b18fe82327094c8b625885faf86
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
