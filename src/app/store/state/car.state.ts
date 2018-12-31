import { ICar } from 'src/app/models/car.model';

export interface ICarState {
  cars: ICar[];
  selectedCar: ICar;
  newCarPushId: string;
}

export const initialCarState: ICarState = { cars: null, selectedCar: null, newCarPushId: null };
