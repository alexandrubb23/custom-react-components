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
}>;

const ChipValueButton = ({
  animateOnTap,
  className,
  operator,
  disabled,
}: ChipValueButtonProps) => {
  const { onSelect, chipValue } = useChipContext();

  const Box = animateOnTap ? ScaleOnTap : Fragment;
  let buttonClass = roundedButtonStyle;

  if (className) buttonClass += ` ${className}`;
  if (disabled) buttonClass += ` ${roundedButtonDisabledStyle}`;

  return (
    <Box>
      <CounterButton
        className={buttonClass}
        disabled={disabled}
        onClick={onSelect}
        operator={operator}
        value={chipValue}
      />
    </Box>
  );
};

export default ChipValueButton;
