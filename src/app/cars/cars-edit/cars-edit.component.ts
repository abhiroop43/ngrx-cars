import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectSelectedCar } from 'src/app/store/selectors/car.selectors';
import { GetCar, AddCar } from 'src/app/store/actions/car.actions';
import { ICar } from 'src/app/models/car.model';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.scss']
})
export class CarsEditComponent implements OnInit {
  car$ = this._store.pipe(select(selectSelectedCar));
  carEditForm = this._fb.group({
    make: ['', Validators.required],
    model: ['', Validators.required],
    plateNumber: ['', Validators.required],
    year: ['', Validators.required],
    color: ['', Validators.required],
    vehicleType: ['', Validators.required]
  });

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this._route.snapshot.params.id !== 'new') {
      this._store.dispatch(new GetCar(this._route.snapshot.params.id));
    }
  }

  onSubmit() {
    console.log(this.carEditForm.value);
    const carToSubmit: ICar = this.carEditForm.value;
    if (this._route.snapshot.params.id !== 'new') {
      carToSubmit.id = this._route.snapshot.params.id;
    } else {
      carToSubmit.id = new Date().getTime();
    }
    carToSubmit.make = this.carEditForm.value.make;
    carToSubmit.model = this.carEditForm.value.model;
    carToSubmit.plateNumber = this.carEditForm.value.plateNumber;
    carToSubmit.vehicleType = this.carEditForm.value.vehicleType;
    carToSubmit.year = this.carEditForm.value.year;
    carToSubmit.color = this.carEditForm.value.color;

    this._store.dispatch(new AddCar(carToSubmit));
  }
}
