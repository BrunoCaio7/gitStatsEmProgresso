import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from 'src/app/components/api/api.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:ApiComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumoRouterRoutingModule { }
