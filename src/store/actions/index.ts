export interface IncrementCountAction {
  type: 'INCREMENT_COUNT';
}
export interface DecrementCountAction {
  type: 'DECREMENT_COUNT';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = IncrementCountAction | DecrementCountAction;
