import CounterButton, { Operator } from '../CounterButton/CounterButton';
import { roundedButtonStyle } from './ChipValueButton/style.css';
import useChipContext from './contexts/useChipContext';

type ChipValueButtonProps = {
  operator: Operator;
  className?: string;
};

const ChipValueButton = ({ className, operator }: ChipValueButtonProps) => {
  const { onChipSelect, chipValue } = useChipContext();

  return (
    <CounterButton
      className={`${roundedButtonStyle} ${className}`}
      onClick={onChipSelect}
      operator={operator}
      value={chipValue}
    />
  );
};

export default ChipValueButton;
