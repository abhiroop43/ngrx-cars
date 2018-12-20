import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { carReducers } from './car.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  cars: carReducers
};
