import { ICar } from 'src/app/models/car.model';

export interface ICarState {
  cars: ICar[];
}

export const initialCarState: ICarState = {
  cars: null
};
