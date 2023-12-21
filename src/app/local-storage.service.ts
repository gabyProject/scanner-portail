import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(Key: string, value: string){
    window.localStorage.setItem(Key, value)
  }

  getJwt(){
    window.localStorage.getItem('JWT')
    
  }

  get(Key: string){
    window.localStorage.getItem(Key)
  }

  remove(Key: string){
    window.localStorage.removeItem(Key);
  }
}
