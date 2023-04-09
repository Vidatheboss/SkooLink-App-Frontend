import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SignupComponent } from './pages/signup/signup.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatSelectModule } from '@angular/material/select';
import { InboxComponent } from './pages/inbox/inbox.component';
import { NewsComponent } from './pages/news/news.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { TokenInterceptorInterceptor } from "./services/token-interceptor.interceptor";
import { InboxFilterComponent } from './pages/inbox-filter/inbox-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfilesComponent,
    SignupComponent,
    ProfileComponent,
    NewsComponent,
    InboxComponent,
    ComposeComponent,

    DashboardComponent,
      InboxFilterComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
