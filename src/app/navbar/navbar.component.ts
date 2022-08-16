import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dialog:MatDialog,
    private apiservice:ApiService) {}
     
 
 
   openDialogConfirmExit() {
     const ref = this.dialog.open(LogoutDialogComponent)
    
     ref.afterClosed().subscribe((boolean) => {
      if(boolean) {
        this.apiservice.signOut()
      }
     })
    }

  ngOnInit(): void {
  }

}
