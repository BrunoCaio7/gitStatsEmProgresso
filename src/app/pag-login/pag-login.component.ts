import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-pag-login',
  templateUrl: './pag-login.component.html',
  styleUrls: ['./pag-login.component.css']
})
export class PagLoginComponent implements OnInit {

 
  constructor(private snackBar: MatSnackBar,private router:Router,apiservice:ApiService) {}

  ngOnInit(): void {}

  
     
    
 
  dashboard(usuario:string){
    this.router.navigateByUrl(`dashboard/${usuario}`)
    } 
   
  
    
  
   
    
  
}
