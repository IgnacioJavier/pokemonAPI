import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch:'full'
  },
  {
    path:'**', redirectTo: 'not-found', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
