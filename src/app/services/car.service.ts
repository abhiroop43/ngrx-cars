import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ICarHttp } from '../models/http-models/car-http.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarService {
  baseUrl = 'https://ngrx-cars.firebaseio.com/';
  constructor(private _http: HttpClient) {}

  getCars(): Observable<ICarHttp> {
    return this._http.get<ICarHttp>(`${this.baseUrl}cars.json`);
  }
}
