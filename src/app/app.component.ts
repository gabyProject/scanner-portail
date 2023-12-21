import { Component } from '@angular/core';
import {LoginServiceService} from './login-service.service'
import { LocalStorageService } from './local-storage.service';
import { Ilogin } from './Ilogin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  current_Error : String | undefined

  

  constructor(){

  }




}
