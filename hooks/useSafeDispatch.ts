import React from 'react';

/**
 * Avoids dispatch to work when the component is unmounted to avoid memory leaks
 *
 * For more information, see Kent C. Dodds' Epic React course or read this
 * https://headbutt.io/useSafeDispatch/
 * @param dispatch The original dispatch
 * @returns A safe dispatch
 */
export function useSafeDispatch(dispatch: React.Dispatch<any>) {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(
    (...args: [any]) => (mountedRef.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}
