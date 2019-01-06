import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsEditComponent } from './cars/cars-edit/cars-edit.component';
import { CarsNewComponent } from './cars/cars-new/cars-new.component';

const routes: Routes = [
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarsEditComponent },
  { path: 'new-car', component: CarsNewComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
