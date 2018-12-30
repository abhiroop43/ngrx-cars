import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ICarHttp } from '../models/http-models/car-http.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarService {
  constructor(private _http: HttpClient) {}

  getCars(): Observable<ICarHttp> {
    return this._http.get<ICarHttp>(''); // TODO: Add Firebase URL endpoint
  }
}
