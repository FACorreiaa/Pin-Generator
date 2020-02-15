import { PinState } from './pinType';

export const GENERATE_PINS = 'GENERATE_PINS';

interface GeneratePin {
  type: typeof GENERATE_PINS;
  pins: PinState;
}

export type PinActionTypes = GeneratePin;

export type AppActions = PinActionTypes;
