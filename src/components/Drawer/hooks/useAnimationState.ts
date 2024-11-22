import { useCallback, useRef, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

const useAnimationState = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleAnimationState = useCallback(
    (state: boolean) => () => {
      setIsRunning(state);
    },
    []
  );

  useEventListener('animationstart', handleAnimationState(true), ref);
  useEventListener('animationend', handleAnimationState(false), ref);

  return { isRunning, ref };
};

export default useAnimationState;
