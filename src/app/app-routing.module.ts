import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsEditComponent } from './cars/cars-edit/cars-edit.component';

const routes: Routes = [
  { path: 'cars', component: CarsListComponent },
  { path: 'car/:id', component: CarsEditComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
