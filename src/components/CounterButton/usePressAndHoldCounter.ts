import { useCallback, useEffect, useRef } from 'react';
import { useEventListener } from 'usehooks-ts';

type Config = {
  minDuration?: number;
  maxDuration?: number;
  decreaseStep?: number;
};

const MIN_DURATION_MS = 50;
const MAX_DURATION_MS = 200;
const DECREASE_STEP_DURATION_MS = 5;

const usePressAndHoldCounter = (
  handleCount: () => void,
  {
    minDuration = MIN_DURATION_MS,
    maxDuration = MAX_DURATION_MS,
    decreaseStep = DECREASE_STEP_DURATION_MS,
  }: Config = {}
) => {
  const isMouseDown = useRef(false);
  const durationRef = useRef(maxDuration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (minDuration > maxDuration) {
      console.warn('minDuration cannot be greater than maxDuration');
    }
  }, [minDuration, maxDuration]);

  const clearIntervalIfActive = () => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const clearCounter = useCallback(() => {
    clearIntervalIfActive();
    isMouseDown.current = false;
    durationRef.current = maxDuration;
  }, [maxDuration]);

  const startCounter = useCallback(() => {
    if (isMouseDown.current) return;
    isMouseDown.current = true;

    const run = () => {
      handleCount();

      if (durationRef.current > minDuration)
        durationRef.current -= decreaseStep;

      clearIntervalIfActive();
      intervalRef.current = setInterval(run, durationRef.current);
    };

    run();
  }, [handleCount, minDuration, decreaseStep]);

  const handlePointerDown = (event: PointerEvent) => {
    if (event.pointerType === 'mouse' || event.pointerType === 'touch') {
      startCounter();
    }
  };

  const preventDefaultTouch = (event: TouchEvent) => {
    event.preventDefault();
  };

  useEventListener('pointerdown', handlePointerDown, buttonRef);
  useEventListener('pointerup', clearCounter, buttonRef);
  useEventListener('pointerleave', clearCounter, buttonRef);

  useEventListener('touchstart', preventDefaultTouch, buttonRef);
  useEventListener('touchend', clearCounter, buttonRef);

  useEffect(() => {
    return () => {
      clearCounter();
    };
  }, [clearCounter]);

  return { buttonRef };
};

export default usePressAndHoldCounter;
