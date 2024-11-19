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

const CURRENCY = '€';

export const squeezeAnimation = (start: boolean, duration = 0.3) =>
  start ? `${squeeze} ${duration}s forwards` : 'none';

export const chipWithCurrency = (value: number) => `${CURRENCY}${value}`;

const ChipValueSelector = () => {
  const { isOpen } = useDrawerContext();
  const { chipValue } = useChipContext();

  const transparent = isOpen ? chipValueTransparent : '';

  const style = assignInlineVars({
    [chipValueAnimation]: squeezeAnimation(isOpen),
  });

  return (
    <div className={`${chipValueStyle} ${transparent}`} style={style}>
      <ChipValueButton animateOnTap={chipValue !== 0} operator='-' />
      <Drawer.Toggle className={chipSelectedValueOutlined}>
        <ScaleOnTap>
          <div>BET</div>
          <div>{chipWithCurrency(chipValue)}</div>
        </ScaleOnTap>
      </Drawer.Toggle>
      <ChipValueButton
        animateOnTap={true}
        className={roundedPlusButtonStyle}
        operator='+'
      />
    </div>
  );
};

export default ChipValueSelector;
