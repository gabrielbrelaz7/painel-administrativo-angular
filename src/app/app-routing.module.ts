import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule),
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
