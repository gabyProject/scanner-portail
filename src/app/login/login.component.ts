import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { Ilogin } from '../Ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  current_Error : String | undefined

  

  constructor(private loginService: LoginServiceService, private localStorage: LocalStorageService, private router: Router ){
    if(localStorage.get("JWT")!=null){
      localStorage.remove("JWT")
    }
  }
  loginUser(item:any){
    const login : Ilogin = { login: item.login, password : item.password};
    this.loginService.authenticateUser(login).subscribe(data => {
      this.localStorage.set("JWT",data.token);
      console.log("Before redirection ")
      this.router.navigate(['/','home']);
      console.log("After redirection ")

    }, 
    err => {
      console.log(err)
      this.current_Error = err.error
    })


  }

}
