import { Fragment } from 'react/jsx-runtime';

import { PropsWithClassName } from '../../../types/generics';
import CounterButton, { Operator } from '../../CounterButton/CounterButton';
import useChipContext from '../contexts/useChipContext';
import ScaleOnTap from './ScaleOnTap';
import { roundedButtonDisabledStyle, roundedButtonStyle } from './style.css';

type ChipValueButtonProps = PropsWithClassName<{
  animateOnTap?: boolean;
  operator: Operator;
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
  operator,
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
        onClick={onChipSelect}
        operator={operator}
        value={chipValue}
        min={min}
        max={max}
      />
    </Box>
  );
};

export default ChipValueButton;
