import { Action } from '@ngrx/store';
import { ICar } from 'src/app/models/car.model';

export enum ECarActions {
  GetCars = '[Car] Get Cars',
  GetCarsSuccess = '[Car] Get Cars Success',
  GetCar = '[Car] Get Car',
  GetCarSuccess = '[Car] Get Car Success'
}

export class GetCars implements Action {
  public readonly type = ECarActions.GetCars;
}

export class GetCarsSuccess implements Action {
  public readonly type = ECarActions.GetCarsSuccess;
  constructor(public payload: ICar[]) {}
}

export class GetCar implements Action {
  public readonly type = ECarActions.GetCar;
  constructor(public payload: number) {}
}

export class GetCarSuccess implements Action {
  public readonly type = ECarActions.GetCarSuccess;
  constructor(public payload: ICar) {}
}

export type CarActions = GetCars | GetCarsSuccess | GetCar | GetCarSuccess;
