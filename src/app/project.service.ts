import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IprojectsOut } from 'src/IProjectsOut';
import { Iproject } from 'src/Iproject';
import {Iscan} from 'src/Iscan';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url_api = "http://localhost:8080/api/v1/start/information"
  url_api_get = "http://localhost:8080/api/v1/start/listProject"
  url_api_scan = "http://localhost:8080/api/v1/scann/service"

  constructor(private http: HttpClient) { }

  addNewProject(projectInfo:Iproject, header:any):Observable<any>{
    const headersv = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+header});
    console.log(projectInfo);
    return this.http.post<Iproject>(this.url_api,projectInfo, {headers:headersv})
}

  getAllProject(header:any):Observable<any>{
    const headersv = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+header});
    return this.http.get<IprojectsOut>(this.url_api_get,{headers:headersv})
  }


  addNewScan(id:any, header:any):Observable<any>{
    const headersv = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+header});
    const scan: Iscan = {idProject:id}
    return this.http.post<Iscan>(this.url_api_scan, scan, {headers:headersv});
  }
}
