import { Component, OnInit } from '@angular/core';
import { Iproject } from 'src/Iproject';
import { ProjectService } from '../project.service';
import { IprojectsOut } from 'src/IProjectsOut';
declare function hide():void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private jwt:any
  response: any; 
  projects: IprojectsOut[] = [];
  current_Error:any;

  constructor(private project:ProjectService){
      
  }
  ngOnInit(): void {
    if(localStorage.getItem('JWT')==null){
      console.log("THE JWT NOT EXIST")
    }else{
      this.jwt = localStorage.getItem('JWT')
    }
    this.getAllProject()
  }

  getAllProject(){
      this.current_Error = null;
      this.project.getAllProject(this.jwt).subscribe(data => {
        this.response = data.map((p:any) => { return {
          id:p.id,
          projectname:p.name,
          ipaddress:p.ip,
          domaine:p.domaine
        }})
      },
        err => {
          console.log(err.error.message)
        this.current_Error = err.error.message
        })
  }

  addNewProject(item:any){
    const project : Iproject = { projectname: item.projectname, ipaddress : item.ipaddress, domaine : item.domaine};
    this.project.addNewProject(project,this.jwt).subscribe(data => {}, 
      err => {
        console.log(err.error.message)
        this.current_Error = err.error.message
      })
    this.getAllProject();
  }


  

  getname(id:any){
    console.log("THE ID IS "+id)
    this.project.addNewScan(id,this.jwt).subscribe( data => {}, err => {
      console.log(err)
    })
  }

}
