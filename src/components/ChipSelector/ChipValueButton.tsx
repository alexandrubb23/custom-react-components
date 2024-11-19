import CounterButton, { Operator } from '../CounterButton/CounterButton';
import useChipContext from './contexts/useChipContext';
import { roundedButtonStyle } from './style.css';

type ChipValueButtonProps = {
  operator: Operator;
};

const ChipValueButton = ({ operator }: ChipValueButtonProps) => {
  const { onSelect, chipValue } = useChipContext();

  return (
    <CounterButton
      className={roundedButtonStyle}
      onClick={onSelect}
      operator={operator}
      value={chipValue}
    />
  );
};

export default ChipValueButton;
