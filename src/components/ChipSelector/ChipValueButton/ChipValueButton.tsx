import { PropsWithClassName } from '../../../types/generics';
import CounterButton, { Operator } from '../../CounterButton/CounterButton';
import useChipContext from '../contexts/useChipContext';
import { roundedButtonStyle } from './style.css';

type ChipValueButtonProps = PropsWithClassName<{
  operator: Operator;
}>;

const ChipValueButton = ({ className, operator }: ChipValueButtonProps) => {
  const { onSelect, chipValue } = useChipContext();

  return (
    <CounterButton
      className={`${roundedButtonStyle} ${className}`}
      onClick={onSelect}
      operator={operator}
      value={chipValue}
    />
  );
};

export default ChipValueButton;
