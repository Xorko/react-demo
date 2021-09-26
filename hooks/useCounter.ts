import React from 'react';
import { useSafeDispatch } from 'hooks';

export enum ActionTypes {
  INCREMENT,
  DECREMENT,
}

type State = {
  count: number;
};

type Action = {
  type: ActionTypes;
};

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.DECREMENT:
      if (state.count >= 1) {
        return { ...state, count: state.count - 1 };
      }
      return state;
      break;

    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
      break;

    default:
      throw new Error('Unsupported action type');
  }
}

export function useCounter(initialState?: State) {
  const [state, unsafeDispatch] = React.useReducer(counterReducer, {
    count: 0,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  return { state, dispatch };
}
