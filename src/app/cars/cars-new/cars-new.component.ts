import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectSelectedCar } from 'src/app/store/selectors/car.selectors';
import { GetCar, AddCar } from 'src/app/store/actions/car.actions';
import { ICar } from 'src/app/models/car.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.scss']
})
export class CarsNewComponent implements OnInit {
  carCreateForm = this._fb.group({
    make: ['', Validators.required],
    model: ['', Validators.required],
    plateNumber: ['', Validators.required],
    year: ['', Validators.required],
    color: ['', Validators.required],
    vehicleType: ['', Validators.required]
  });
  constructor(
    private _store: Store<IAppState>,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.carCreateForm.value);
    const carToSubmit: ICar = this.carCreateForm.value;

    // carToSubmit.id = new Date().getTime();
    carToSubmit.id = '0';

    carToSubmit.make = this.carCreateForm.value.make;
    carToSubmit.model = this.carCreateForm.value.model;
    carToSubmit.plateNumber = this.carCreateForm.value.plateNumber;
    carToSubmit.vehicleType = this.carCreateForm.value.vehicleType;
    carToSubmit.year = this.carCreateForm.value.year;
    carToSubmit.color = this.carCreateForm.value.color;

    this._store.dispatch(new AddCar(carToSubmit));

    this.carCreateForm.reset();
    this._router.navigate(['cars']);
  }
}
