import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { ICar } from '../models/car.model';

describe('CarService', () => {
  let carSrv: CarService; // Add this

  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService, { provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });

    carSrv = TestBed.get(CarService); // Add this
  });

  it('should be created', () => {
    // Remove inject()
    expect(carSrv).toBeTruthy();
  });

  describe('GetAllCars', () => {
    it('should return a collection of cars', () => {
      const carsResponse: ICar[] = [
        {
          plateNumber: 'ABCCX1187',
          model: '370Z',
          id: '1546765384132',
          color: '#ff0000',
          year: 2015,
          make: 'Nissan',
          vehicleType: 'Coupe'
        },
        {
          color: '#800000',
          year: 2014,
          make: 'Audi',
          vehicleType: 'Coupe',
          plateNumber: 'ABCD1123',
          model: 'TT',
          id: '1546328507804'
        }
      ];

      let response;
      spyOn(carSrv, 'getCars').and.returnValue(of(carsResponse));

      carSrv.getCars().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(carsResponse);
    });
  });
});
