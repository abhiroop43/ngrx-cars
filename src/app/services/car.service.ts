import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ICar } from '../models/car.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';

@Injectable()
export class CarService {
  constructor(private _db: AngularFireDatabase) {}

  getCars(): Observable<ICar[]> {
    return <Observable<ICar[]>>this._db.list('cars').valueChanges();
  }

  getCar(index: string): Observable<ICar[]> {
    // return <Observable<ICar>>this._db.object(`cars/${index}`).valueChanges();
    console.log('Index is: ', index);
    return <Observable<ICar[]>>(
      this._db.list('cars', ref => ref.equalTo(index, 'id')).valueChanges()
    );
  }

  addNewCar(car: ICar): Observable<string> {
    return from(this._db.list('cars').push(car));
  }
}
