import { IncrementCountAction, DecrementCountAction } from './index';

export const actionCreators = {
  increment: () => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
  decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction)
};
