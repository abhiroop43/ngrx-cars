import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { GetCars, DeleteCar } from 'src/app/store/actions/car.actions';
import { selectCarList } from 'src/app/store/selectors/car.selectors';
import { ICar } from 'src/app/models/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  cars$ = this._store.pipe(select(selectCarList));
  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetCars());
  }

  navigateToCar(id: number) {
    this._router.navigate(['car', id]);
  }

  deleteCar(car: ICar) {
    const confirm_delete = confirm('Are you sure you want to delete this car?');
    if (confirm_delete) {
      console.log('Deleting.....', car);
      this._store.dispatch(new DeleteCar(car));
    }
  }
}
