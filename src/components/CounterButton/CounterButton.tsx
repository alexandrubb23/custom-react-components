import { useEffect, useRef } from 'react';

import { PropsWithClassName } from '../../types/generics';
import usePressAndHoldCounter from './usePressAndHoldCounter';

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

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const { buttonRef } = usePressAndHoldCounter(() => {
    if (disabled) return;

    const currentValue = valueRef.current;
    const isDecrement = operation === 'decrement';

    if (isDecrement && currentValue <= min) return;
    if (!isDecrement && currentValue >= max) return;

    const newValue = isDecrement ? currentValue - 1 : currentValue + 1;
    onClick(newValue);
  });

  return (
    <button className={className} ref={buttonRef} disabled={disabled}>
      {label}
    </button>
  );
};

export default CounterButton;
