import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  /* @Input() informacao!:String; */
  /* colunas: Array<string> = ['id','repositorios','email',] */

  repositorios!: interfaceRepos[]
  dataUser!: Interface

  
 /*  public apiValues$!: Observable<Interface>;
  public apiRepos$!: Observable<interfaceRepos>;
  interfaceValue!: Interface;
  interfaceRepos!: interfaceRepos;  */
   cardValues:boolean = false 

   
   

  
 /*  id:number = 0
  login:string = ''
  followers:number = 0
  following:number = 0
  public_repos:number = 0
  image:string = ''
   blog:string = ''
  email:string = ''  */
  

  /* language:string[] = [] */
 
 

  constructor(private apiService: ApiService, 
    private snackBar: MatSnackBar,private route: ActivatedRoute,private dialog:MatDialog,) {}
    


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let username=(params.get('usuario') ?? '0')
        this.dataUsers(username)
      })
  }
  dataUsers(userName: string) {
    this.apiService.dataUser(userName).subscribe((a) => {

      this.dataUser = a

    },
      (error: HttpErrorResponse) => {
        if (error.status == 404) {
          this.snackBar.open("Usuário não encontrado", "Ok", {
            verticalPosition: 'top',
            duration: 3000
          })
        }
      });
    this.apiService.reposUser(userName).subscribe((rep) => {

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

 
}

  


