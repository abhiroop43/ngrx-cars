import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ICar } from '../models/car.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CarService {
  constructor(private _db: AngularFireDatabase, private _fs: AngularFirestore) {}

  getCars(): Observable<ICar[]> {
    // return <Observable<ICar[]>>this._db.list('cars').valueChanges();
    return this._fs.collection<ICar>('cars').valueChanges();
  }

  getCar(index: number): Observable<ICar[]> {
    // return <Observable<ICar>>this._db.object(`cars/${index}`).valueChanges();
    // console.log('Index is: ', index);
    return this._fs
      .collection<ICar>('cars')
      .valueChanges()
      .pipe(
        map((cars: ICar[]) => {
          const filtered = cars.filter(car => car.id === index);
          return filtered;
        })
      );
    // return <Observable<ICar[]>>this._db
    //   .list('cars', ref => ref.equalTo(index, 'id'))
    //   .valueChanges()
    //   .pipe(
    //     map((cars: ICar[]) => {
    //       const filtered = cars.filter(car => car.id === index);
    //       return filtered;
    //     })
    //   );
  }

  addNewCar(car: ICar): Observable<DocumentReference> {
    return from(this._fs.collection<ICar>('cars').add(car));
    // return from(this._db.list('cars').push(car));
  }
}
