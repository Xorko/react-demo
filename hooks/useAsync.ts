import React from 'react';
import { useSafeDispatch } from 'hooks';

export enum Status {
  IDLE,
  PENDING,
  RESOLVED,
  REJECTED,
}

type State = {
  status?: Status;
  data?: any;
  error?: Error | null;
};

type Action =
  | { type: Status.PENDING }
  | { type: Status.RESOLVED; data: any }
  | { type: Status.REJECTED; error: Error };

function asyncReducer(state: State, action: Action): State {
  switch (action.type) {
    case Status.PENDING: {
      return { status: Status.PENDING, data: null, error: null };
    }
    case Status.RESOLVED: {
      return { status: Status.RESOLVED, data: action.data, error: null };
    }
    case Status.REJECTED: {
      return { status: Status.REJECTED, data: null, error: action.error };
    }
  }
}

// Example usage:
// const {data, error, status, run} = useAsync()
// React.useEffect(() => {
//   run(fetchPokemon(pokemonName))
// }, [pokemonName, run])
export function useAsync(initialState?: State) {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: Status.IDLE,
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { data, error, status } = state;

  const run = React.useCallback(
    (promise: Promise<any>) => {
      dispatch({ type: Status.PENDING });
      promise.then(
        (data: any) => {
          dispatch({ type: Status.RESOLVED, data });
        },
        (error: Error) => {
          dispatch({ type: Status.REJECTED, error });
        }
      );
    },
    [dispatch]
  );

  return {
    error,
    status,
    data,
    run,
  };
}
