import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Interface } from 'src/app/modelsInterface/interface';
import { interfaceRepos } from 'src/app/modelsInterface/interfaceRepos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-pag-login',
  templateUrl: './pag-login.component.html',
  styleUrls: ['./pag-login.component.css']
})
export class PagLoginComponent implements OnInit {


 
 

  
  

 
  constructor(private apiService: ApiService,
    private snackBar: MatSnackBar,private router:Router) {}

  ngOnInit(): void {}

  
     
     


 
  dashboard(usuario:string){
    this.router.navigateByUrl(`dashboard/${usuario}`)
    }
}
