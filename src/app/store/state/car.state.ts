import { ICar } from 'src/app/models/car.model';

export interface ICarState {
  cars: ICar[];
  selectedCar: ICar;
}

export const initialCarState: ICarState = {
  cars: null,
  selectedCar: null
};
