import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectSelectedCar } from 'src/app/store/selectors/car.selectors';
import { GetCar, AddCar } from 'src/app/store/actions/car.actions';
import { ICar } from 'src/app/models/car.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.scss']
})
export class CarsEditComponent implements OnInit, OnDestroy {
  car$ = this._store.pipe(select(selectSelectedCar));
  carEditForm = this._fb.group({
    make: ['', Validators.required],
    model: ['', Validators.required],
    plateNumber: ['', Validators.required],
    year: ['', Validators.required],
    color: ['', Validators.required],
    vehicleType: ['', Validators.required]
  });

  // formSub: Subscription;
  id: number;
  private routeSub: Subscription;

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      this.id = +params['id'];
      this._store.dispatch(new GetCar(this.id));
    });
  }

  ngOnDestroy(): void {
    // this.carEditForm.reset();
    this.routeSub.unsubscribe();
  }

  onSubmit() {
    console.log(this.carEditForm.value);
    const carToSubmit: ICar = this.carEditForm.value;
    carToSubmit.id = this.id;

    carToSubmit.make = this.carEditForm.value.make;
    carToSubmit.model = this.carEditForm.value.model;
    carToSubmit.plateNumber = this.carEditForm.value.plateNumber;
    carToSubmit.vehicleType = this.carEditForm.value.vehicleType;
    carToSubmit.year = this.carEditForm.value.year;
    carToSubmit.color = this.carEditForm.value.color;

    this._store.dispatch(new AddCar(carToSubmit));
  }
}
