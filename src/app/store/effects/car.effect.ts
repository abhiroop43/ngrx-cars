import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { CarService } from '../../services/car.service';
import {
  GetCar,
  ECarActions,
  GetCarSuccess,
  GetCars,
  GetCarsSuccess
} from '../actions/car.actions';
import { selectCarList } from '../selectors/car.selectors';
import { ICar } from 'src/app/models/car.model';

@Injectable()
export class CarEffects {
  @Effect()
  getCar$ = this._action$.pipe(
    ofType<GetCar>(ECarActions.GetCar),
    map(action => action.payload),
    switchMap(index => {
      return this._carService.getCar(index);
    }),
    switchMap((car: ICar) => of(new GetCarSuccess(car)))
  );

  @Effect()
  getCars$ = this._action$.ofType<GetCars>(ECarActions.GetCars).pipe(
    switchMap(() => this._carService.getCars()),
    switchMap((cars: ICar[]) => of(new GetCarsSuccess(cars)))
  );

  constructor(
    private _carService: CarService,
    private _action$: Actions,
    private _store: Store<IAppState>
  ) {}
}
