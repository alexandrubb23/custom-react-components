import { PropsWithClassName } from '../../types/generics';
import CounterButton, {
  CounterOperation,
} from '../CounterButton/CounterButton';
import { roundedButtonStyle } from './ChipValueButton/style.css';
import useChipContext from './contexts/useChipContext';

type ChipValueButtonProps = PropsWithClassName<{
  operation: CounterOperation;
}>;

const ChipValueButton = ({
  className = '',
  operation,
}: ChipValueButtonProps) => {
  const { onChipSelect, chipValue } = useChipContext();

  return (
    <CounterButton
      className={`${roundedButtonStyle} ${className}`}
      onClick={onChipSelect}
      operation={operation}
      value={chipValue}
    />
  );
};

export default ChipValueButton;
