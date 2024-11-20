import { useCallback, useEffect, useRef } from 'react';
import { PropsWithClassName } from '../../types/generics';
import { useEventListener } from 'usehooks-ts';

export type Operator = '+' | '-';

export type CounterButtonProps = PropsWithClassName<{
  disabled?: boolean;
  max?: number;
  min?: number;
  onClick: (newValue: number) => void;
  operator: Operator;
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
  operator,
  value,
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

    if (operator === '-' && currentValue === 0) {
      clearCounter();
      return;
    }

    const newValue = operator === '-' ? currentValue - 1 : currentValue + 1;

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

    console.log('Duration: ', durationRef.current);
  }, [disabled, onClick, operator, clearCounter, min, max]);

  const onMouseDown = () => {
    isMouseDown.current = true;
    durationRef.current = 200;
    intervalRef.current = setInterval(handleCount, durationRef.current);
  };

  // TODO: Attach event listeners to handle touches interactions?
  useEventListener('mousedown', onMouseDown, buttonRef);
  useEventListener('mouseup', clearCounter, buttonRef);
  useEventListener('mouseleave', clearCounter, buttonRef);

  return (
    <button className={className} onClick={handleCount} ref={buttonRef}>
      {operator}
    </button>
  );
};

export default CounterButton;
