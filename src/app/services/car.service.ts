import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ICar } from '../models/car.model';
import {
  AngularFirestore,
  DocumentReference,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CarService {
  carCollectionRef: AngularFirestoreCollection<ICar>;
  constructor(private _fs: AngularFirestore) {
    this.carCollectionRef = this._fs.collection<ICar>('cars');
  }

  getCars(): Observable<ICar[]> {
    // return this._fs.collection<ICar>('cars').valueChanges();
    return this.carCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as ICar;
          const id = data.id;
          return { id, ...data };
        });
      })
    );
  }

  getCar(index: number): Observable<ICar[]> {
    return this.getCars().pipe(
      map((cars: ICar[]) => {
        const filtered = cars.filter(car => car.id === index);
        return filtered;
      })
    );
  }

  addUpdateCar(car: ICar): Observable<any> {
    if (car.id === 0) {
      car.id = new Date().getTime();
      return from(this.carCollectionRef.add(car));
    } else {
      return from(
        this.carCollectionRef.doc(car.id.toString()).update({
          make: car.make,
          model: car.model,
          year: car.year,
          plateNumber: car.plateNumber,
          vehicleType: car.vehicleType,
          color: car.color
        })
      );
    }
  }
}
