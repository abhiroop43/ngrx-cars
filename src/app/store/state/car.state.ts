import { ICar } from 'src/app/models/car.model';
import { DocumentReference } from '@angular/fire/firestore';

export interface ICarState {
  cars: ICar[];
  selectedCar: ICar;
  newCarPushId: DocumentReference;
}

export const initialCarState: ICarState = { cars: null, selectedCar: null, newCarPushId: null };
