import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from 'src/app/components/api/api.component';
import { PagLoginComponent } from 'src/app/pag-login/pag-login.component';
import { ErrorPageComponent } from '../errorPage/error-page.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:PagLoginComponent
  },
 
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumoRouterRoutingModule { }
