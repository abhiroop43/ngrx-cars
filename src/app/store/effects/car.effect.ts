import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CarService } from '../../services/car.service';
import {
  GetCar,
  ECarActions,
  GetCarSuccess,
  GetCars,
  GetCarsSuccess,
  AddCar,
  AddCarSuccess,
  DeleteCar,
  DeleteCarSuccess
} from '../actions/car.actions';
import { ICar } from 'src/app/models/car.model';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable()
export class CarEffects {
  @Effect()
  getCar$ = this._action$.pipe(
    ofType<GetCar>(ECarActions.GetCar),
    map(action => action.payload),
    switchMap(index => this._carService.getCar(index)),
    switchMap((car: ICar) => of(new GetCarSuccess(car)))
  );

  @Effect()
  getCars$ = this._action$.ofType<GetCars>(ECarActions.GetCars).pipe(
    switchMap(() => this._carService.getCars()),
    switchMap((cars: ICar[]) => of(new GetCarsSuccess(cars)))
  );

  @Effect()
  addCar$ = this._action$.pipe(
    ofType<AddCar>(ECarActions.AddCar),
    map(action => action.payload),
    switchMap(car => this._carService.addUpdateCar(car)),
    switchMap((pushId: DocumentReference) => of(new AddCarSuccess(pushId)))
  );

  @Effect()
  deleteCar$ = this._action$.pipe(
    ofType<DeleteCar>(ECarActions.DeleteCar),
    map(action => action.payload),
    switchMap(car => this._carService.deleteCar(car)),
    switchMap(() => of(new DeleteCarSuccess()))
  );

  constructor(private _carService: CarService, private _action$: Actions) {}
}
