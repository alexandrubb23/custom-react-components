import { assignInlineVars } from '@vanilla-extract/dynamic';

import { roundedPlusButtonStyle } from './ChipValueButton/style.css';
import ChipValueButton from './ChipValueButton/ChipValueButton';
import Drawer from '../Drawer/Drawer';
import ScaleOnTap from './ChipValueButton/ScaleOnTap';
import useChipContext from './contexts/useChipContext';
import useDrawerContext from '../Drawer/contexts/useDrawerContext';
import {
  chipSelectedValueOutlined,
  chipValueAnimation,
  chipValueStyle,
  chipValueTransparent,
  squeeze,
} from './style.css';
import useChips from './hooks/useChips';

const CURRENCY = '€';

export const squeezeAnimation = (start: boolean, duration = 0.3) =>
  start ? `${squeeze} ${duration}s forwards` : 'none';

export const chipWithCurrency = (value: number) => `${CURRENCY}${value}`;

const ChipValueSelector = () => {
  const { minAmount } = useChips();

  const { isOpen } = useDrawerContext();
  const { chipValue } = useChipContext();

  const transparent = isOpen ? chipValueTransparent : '';

  const style = assignInlineVars({
    [chipValueAnimation]: squeezeAnimation(isOpen),
  });

  const disabledButton = (!isOpen && chipValue === 0) || chipValue === 0;

  const animateOnDecrement = !disabledButton && minAmount !== chipValue;
  const disabledDecrement = disabledButton || minAmount === chipValue;

  return (
    <div className={`${chipValueStyle} ${transparent}`} style={style}>
      <ChipValueButton
        animateOnTap={animateOnDecrement}
        disabled={disabledDecrement}
        operator='-'
      />

      <Drawer.Toggle className={chipSelectedValueOutlined}>
        <ScaleOnTap>
          <div>BET</div>
          <div>{chipWithCurrency(chipValue)}</div>
        </ScaleOnTap>
      </Drawer.Toggle>

      <ChipValueButton
        animateOnTap={!disabledButton}
        className={roundedPlusButtonStyle}
        disabled={disabledButton}
        operator='+'
      />
    </div>
  );
};

export default ChipValueSelector;
