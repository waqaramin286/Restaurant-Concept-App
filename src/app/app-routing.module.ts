import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { KebabsComponent } from './components/kebabs/kebabs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'kebabs', component: KebabsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
