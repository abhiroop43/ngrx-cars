import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectSelectedCar } from 'src/app/store/selectors/car.selectors';
import { GetCar } from 'src/app/store/actions/car.actions';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.scss']
})
export class CarsEditComponent implements OnInit {
  car$ = this._store.pipe(select(selectSelectedCar));

  constructor(private _store: Store<IAppState>, private _route: ActivatedRoute) {}

  ngOnInit() {
    if (this._route.snapshot.params.id != null) {
      this._store.dispatch(new GetCar(this._route.snapshot.params.id));
    }
  }
}
