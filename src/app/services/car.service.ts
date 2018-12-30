import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ICar } from '../models/car.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class CarService {
  baseUrl = 'https://ngrx-cars.firebaseio.com';
  constructor(private _db: AngularFireDatabase) {}

  getCars(): Observable<ICar[]> {
    // return this._http.get<ICar[]>(`${this.baseUrl}/cars.json`, {
    //   observe: 'body',
    //   responseType: 'json'
    // });
    return <Observable<ICar[]>>this._db.list('cars').valueChanges();
  }

  getCar(index: string): Observable<ICar> {
    // return this._http.get<ICar>(`${this.baseUrl}/cars/${index}.json`, {
    //   observe: 'body',
    //   responseType: 'json'
    // });
    return <Observable<ICar>>this._db.object(`cars/${index}`).valueChanges();
  }
}
