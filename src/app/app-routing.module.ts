import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'consumo',
    loadChildren: () => import('./consumo/consumo-router/consumo-router.module').then((m) => m.ConsumoRouterModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'consumo'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
