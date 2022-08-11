import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Interface } from '../modelsInterface/interface';
import { interfaceRepos } from '../modelsInterface/interfaceRepos';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  repositorios : any
  public apiValues$!: Observable<Interface>;
  public apiRepos$!: Observable<interfaceRepos>;
  interfaceValue!: Interface;
  interfaceRepos!: interfaceRepos; 
   cardValues:boolean = false 

  id:number = 0
  login:string = ''
  followers:number = 0
  following:number = 0
  public_repos:number = 0
  image:string = ''
  blog:string = ''
  email:string = ''
  repos_url:string = '' 
 

  constructor(private apiService: ApiService,
    private snackBar: MatSnackBar) {}


  ngOnInit(): void {
  }
   dataUsers(userName: string) {
    this.apiService.dataUser(userName).subscribe((a) => {
      
     this.id = a.id
     this.login = a.login
     this.followers = a.followers
     this.following = a.following
     this.public_repos = a.public_repos
     this.image = a.avatar_url
     this.blog = a.blog
     this.email = a.email 
      this.cardValues = true  
       console.log(a);
    },
    (error:HttpErrorResponse) => {
      if(error.status == 404){
        this.snackBar.open("Usuário não encontrado", "Ok",{
          verticalPosition:'top',
          duration:3000
        })
      }
    });
    this.apiService.reposUser(userName).subscribe((rep) => { 
     /*  this.html_url = a.html_url */
   /*    this.repos_url = a.repos_url */
       this.repositorios = rep 
      
     
      this.cardValues = true 
   })
   
  } 

   /* reposUser(userRepo: string) {
    this.apiService.reposUser(userRepo).subscribe((a) => {
      this.html_url = a.html_url
      this.repos = a.repos
     
      this.cardValues = true
  })



  }  */

  /* repUser():void {
    this.apiService.repUser().subscribe((x) => (this.commits_url = this.commits_url));

  } */

}

  


