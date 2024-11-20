import { useCallback, useEffect, useRef } from 'react';
import { useEventListener } from 'usehooks-ts';

import { PropsWithClassName } from '../../types/generics';

export type CounterOperation = 'increment' | 'decrement';

export type CounterButtonProps = PropsWithClassName<{
  disabled?: boolean;
  label?: string;
  max?: number;
  min?: number;
  onClick: (newValue: number) => void;
  operation: CounterOperation;
  value: number;
}>;

const MIN_DURATION_MS = 50;
const MAX_DURATION_MS = 200;
const DECREASE_DURATION_MS = 5;

const CounterButton = ({
  className,
  disabled,
  max = Infinity,
  min = -Infinity,
  onClick,
  operation,
  value,
  label,
}: CounterButtonProps) => {
  const valueRef = useRef(value);
  const isMouseDown = useRef(false);
  const durationRef = useRef(MAX_DURATION_MS);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const clearCounter = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    isMouseDown.current = false;
    durationRef.current = MAX_DURATION_MS;
  }, []);

  const handleCount = useCallback(() => {
    if (disabled) return;

    const currentValue = valueRef.current;

    const isDecrement = operation === 'decrement';
    if (isDecrement && currentValue === 0) {
      clearCounter();
      return;
    }

    const newValue = isDecrement ? currentValue - 1 : currentValue + 1;

    onClick(newValue);

    const limitReached = newValue === min || newValue === max;
    if (limitReached) {
      clearCounter();
      return;
    }

    if (durationRef.current > MIN_DURATION_MS)
      durationRef.current -= DECREASE_DURATION_MS;

    if (!isMouseDown.current) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleCount, durationRef.current);
  }, [disabled, onClick, operation, clearCounter, min, max]);

  const onMouseDown = () => {
    isMouseDown.current = true;
    durationRef.current = 200;
    intervalRef.current = setInterval(handleCount, durationRef.current);
  };

  // TODO: Attach event listeners to handle touches interactions?
  // And check if we already have this implemented
  // I don't like this solution, but it's the best I could come up with
  // TODO: Revisit this implementation
  useEventListener(
    'touchstart',
    event => {
      event.preventDefault();
      onMouseDown();
    },
    buttonRef
  );
  useEventListener('touchend', clearCounter, buttonRef);

  useEventListener('mousedown', onMouseDown, buttonRef);
  useEventListener('mouseup', clearCounter, buttonRef);
  useEventListener('mouseleave', clearCounter, buttonRef);

  // TODO: Revisit this implementation
  useEventListener(
    'pointerdown',
    event => {
      switch (event.pointerType) {
        case 'touch':
          handleCount();
          break;
        default:
          break;
      }
    },
    buttonRef
  );

  return (
    <button className={className} onClick={handleCount} ref={buttonRef}>
      {label}
    </button>
  );
};

export default CounterButton;
