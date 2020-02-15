import { GENERATE_PINS, AppActions } from '../types/actions';
import { generateAllPins } from '../utils/generatePins';
import { AppState } from '../configStore';
import { PinState } from '../types/pinType';
import { Dispatch } from 'redux';
// TypeScript infers that this function is returning SendMessageAction

export const getPin = (pins: PinState): AppActions => ({
  type: GENERATE_PINS,
  pins
});

export const startGeneratePin = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const pins = generateAllPins();
    return dispatch(
      getPin({
        pins
      })
    );
  };
};
