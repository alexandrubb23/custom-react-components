import { assignInlineVars } from '@vanilla-extract/dynamic';

import Drawer from '../Drawer/Drawer';
import ChipValueButton from './ChipValueButton/ChipValueButton';
import useChipContext from './contexts/useChipContext';
import useDrawerContext from '../Drawer/contexts/useDrawerContext';
import {
  chipSelectedValueOutlined,
  chipValueStyle,
  chipValueTransparent,
  chipValueAnimation,
  squeeze,
} from './style.css';
import { roundedPlusButtonStyle } from './ChipValueButton/style.css';

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
      <ChipValueButton operator='-' />
      <Drawer.Toggle className={chipSelectedValueOutlined}>
        <div>BET</div>
        <div>{chipWithCurrency(chipValue)}</div>
      </Drawer.Toggle>
      <ChipValueButton operator='+' className={roundedPlusButtonStyle} />
    </div>
  );
};

export default ChipValueSelector;
