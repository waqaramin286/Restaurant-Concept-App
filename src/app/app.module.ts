import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatToolbarModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { HomeComponent } from './components/home/home.component';
import { MealDealsComponent } from './components/meal-deals/meal-deals.component';
import { KidsMealComponent } from './components/kids-meal/kids-meal.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { KebabsComponent } from './components/kebabs/kebabs.component';
import { TableSampleComponent } from './components/table-sample/table-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    SpecialsComponent,
    HomeComponent,
    MealDealsComponent,
    KidsMealComponent,
    PizzasComponent,
    KebabsComponent,
    TableSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
