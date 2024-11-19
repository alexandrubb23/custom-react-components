import { Fragment } from 'react/jsx-runtime';

import { PropsWithClassName } from '../../../types/generics';
import { roundedButtonStyle } from './style.css';
import CounterButton, { Operator } from '../../CounterButton/CounterButton';
import ScaleOnTap from './ScaleOnTap';
import useChipContext from '../contexts/useChipContext';

type ChipValueButtonProps = PropsWithClassName<{
  animateOnTap?: boolean;
  operator: Operator;
}>;

const ChipValueButton = ({
  animateOnTap,
  className,
  operator,
}: ChipValueButtonProps) => {
  const { onSelect, chipValue } = useChipContext();

  const Box = animateOnTap ? ScaleOnTap : Fragment;

  return (
    <Box>
      <CounterButton
        className={`${roundedButtonStyle} ${className}`}
        onClick={onSelect}
        operator={operator}
        value={chipValue}
      />
    </Box>
  );
};

export default ChipValueButton;
