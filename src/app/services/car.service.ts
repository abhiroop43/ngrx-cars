import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../models/car.model';

@Injectable()
export class CarService {
  baseUrl = 'https://ngrx-cars.firebaseio.com';
  constructor(private _http: HttpClient) {}

  getCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>(`${this.baseUrl}/cars.json`, {
      observe: 'body',
      responseType: 'json'
    });
  }

  getCar(index: string): Observable<ICar> {
    return this._http.get<ICar>(`${this.baseUrl}/cars/${index}.json`, {
      observe: 'body',
      responseType: 'json'
    });
  }
}
