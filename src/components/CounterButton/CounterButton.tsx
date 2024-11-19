import { useCallback } from 'react';

export type Operator = '+' | '-';

type CounterButtonProps = {
  onClick: (newValue: number) => void;
  operator: Operator;
  value: number;
  className?: string;
};

const CounterButton = ({
  className,
  onClick,
  operator,
  value,
}: CounterButtonProps) => {
  const handleCount = useCallback(() => {
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
