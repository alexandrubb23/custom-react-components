import { useCallback } from 'react';
import { PropsWithClassName } from '../../types/generics';

export type Operator = '+' | '-';

export type CounterButtonProps = PropsWithClassName<{
  disabled?: boolean;
  onClick: (newValue: number) => void;
  operator: Operator;
  value: number;
}>;

const CounterButton = ({
  className,
  disabled,
  onClick,
  operator,
  value,
}: CounterButtonProps) => {
  const handleCount = useCallback(() => {
    if (disabled) return;

    if (operator === '-' && value === 0) return;

    const newValue = operator === '-' ? value - 1 : value + 1;
    onClick(newValue);
  }, [value, onClick, operator]);

  return (
    <button className={className} onClick={handleCount}>
      {operator}
    </button>
  );
};

export default CounterButton;
