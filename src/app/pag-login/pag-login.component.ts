import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Interface } from 'src/app/modelsInterface/interface';
import { interfaceRepos } from 'src/app/modelsInterface/interfaceRepos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-pag-login',
  templateUrl: './pag-login.component.html',
  styleUrls: ['./pag-login.component.css']
})
export class PagLoginComponent implements OnInit {

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

  ngOnInit(): void {}

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
     /*  this.html_url = a.html_url
      this.repos = a.repos */
      this.repositorios = rep
      
     
      this.cardValues = true
  })
   
  }

  /*  reposUser(userRepo: string) {
    this.apiService.reposUser(userRepo).subscribe((a) => {
      this.html_url = a.html_url
      this.repos = a.repos
     
      this.cardValues = true
  })



  } */

  /* repUser():void {
    this.apiService.repUser().subscribe((x) => (this.commits_url = this.commits_url));

  } */

}
