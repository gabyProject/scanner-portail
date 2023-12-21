import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { NavigationbarComponent } from './component/navigationbar/navigationbar.component';

const appRoute: Routes = [
  {path:'login', component: LoginComponent },
  {path:'logout', component: LoginComponent},
  {path:'home',component: HomeComponent },
  {path:'about',component: AboutComponent },
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
