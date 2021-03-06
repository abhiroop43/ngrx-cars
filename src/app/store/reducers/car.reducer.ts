import { initialCarState, ICarState } from '../state/car.state';
import { ECarActions, CarActions } from '../actions/car.actions';

export const carReducers = (state = initialCarState, action: CarActions): ICarState => {
  switch (action.type) {
    case ECarActions.GetCarsSuccess: {
      return {
        ...state,
        cars: action.payload
      };
    }
    case ECarActions.GetCarSuccess: {
      return {
        ...state,
        selectedCar: action.payload
      };
    }
    case ECarActions.AddCarSuccess: {
      return {
        ...state,
        newCarPushId: action.payload
      };
    }
    case ECarActions.DeleteCarSuccess: {
      return state;
    }
    default:
      return state;
  }
};
