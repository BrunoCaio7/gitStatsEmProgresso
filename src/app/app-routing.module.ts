import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './errorPage/error-page.component';

const routes: Routes = [
  {
    path:'consumo',
    loadChildren: () => import('./consumoRouter/consumo-router.module').then((m) => m.ConsumoRouterModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'consumo'
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard-router/dashboard-router.module').then((m) => m.DashboardRouterModule)
  },
  {
    path: '**',
    component:ErrorPageComponent
  }
   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
