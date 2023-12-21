import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorMessage } from './Errors/ErrorMessage';
import {Ilogin} from './Ilogin'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url_api = "http://localhost:8080/api/v1/auth/signin"
  
  constructor(private http: HttpClient) { }

  authenticateUser(userinfo:Ilogin):Observable<any>{
    return this.http.post<Ilogin>(this.url_api,userinfo)
}
}
