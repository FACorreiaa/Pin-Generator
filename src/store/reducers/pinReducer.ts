import { PinState } from '../types/pinType';
import { GENERATE_PINS, PinActionTypes } from '../types/actions';

const initialState: PinState = {
  pins: []
};

export function pinReducer(
  state = initialState,
  action: PinActionTypes
): PinState {
  switch (action.type) {
    case GENERATE_PINS:
      return {
        pins: [...state.pins, ...action.pins.pins]
      };
    default:
      return state;
  }
}
