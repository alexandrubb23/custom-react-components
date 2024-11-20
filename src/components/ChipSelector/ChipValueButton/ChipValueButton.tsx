import { Fragment } from 'react/jsx-runtime';

import { PropsWithClassName } from '../../../types/generics';
import CounterButton, {
  CounterOperation,
} from '../../CounterButton/CounterButton';
import useChipContext from '../contexts/useChipContext';
import ScaleOnTap from './ScaleOnTap';
import { roundedButtonDisabledStyle, roundedButtonStyle } from './style.css';

type ChipValueButtonProps = PropsWithClassName<{
  animateOnTap?: boolean;
  operation: CounterOperation;
  disabled?: boolean;
  min?: number;
  max?: number;
}>;

const ChipValueButton = ({
  animateOnTap,
  className = '',
  disabled,
  max,
  min,
  operation,
}: ChipValueButtonProps) => {
  const { onChipSelect, chipValue } = useChipContext();

  const Box = animateOnTap ? ScaleOnTap : Fragment;
  let buttonClass = roundedButtonStyle;

  if (disabled) buttonClass += ` ${roundedButtonDisabledStyle}`;

  return (
    <Box>
      <CounterButton
        className={`${buttonClass} ${className}`}
        disabled={disabled}
        max={max}
        min={min}
        onClick={onChipSelect}
        operation={operation}
        value={chipValue}
      />
    </Box>
  );
};

export default ChipValueButton;
