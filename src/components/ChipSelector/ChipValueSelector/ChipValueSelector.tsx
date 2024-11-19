import { assignInlineVars } from '@vanilla-extract/dynamic';

import useDrawerContext from '../../Drawer/contexts/useDrawerContext';
import {
  borderedContainerStyle,
  chipValueAnimation,
  chipValueStyle,
  squeeze,
} from '../style.css';
import ChipValue from './ChipValue';
import DecreaseChipValueButton from './DecreaseChipValueButton';
import IncreaseChipValueButton from './IncreaseChipValueButton';
import { chipValueSelectorContainer } from './style.css';

const CURRENCY = '€';

export const squeezeAnimation = (start: boolean, duration = 0.3) =>
  start ? `${squeeze} ${duration}s forwards` : 'none';

export const chipWithCurrency = (value: number) => `${CURRENCY} ${value}`;

const ChipValueSelector = () => {
  const { isOpen } = useDrawerContext();

  const style = assignInlineVars({
    [chipValueAnimation]: squeezeAnimation(isOpen),
  });

  const className = `${chipValueStyle} ${
    !isOpen ? borderedContainerStyle : ''
  }`;

  return (
    <div className={className} style={style}>
      <div className={chipValueSelectorContainer}>
        <DecreaseChipValueButton />
        <ChipValue />
        <IncreaseChipValueButton />
      </div>
    </div>
  );
};

export default ChipValueSelector;
