import { assignInlineVars } from '@vanilla-extract/dynamic';

import useDrawerContext from '@components/Drawer/contexts/useDrawerContext';
import {
  borderedContainerStyle,
  chipValueAnimation,
  chipValueStyle,
  squeeze,
} from '../style.css';
import { chipValueSelectorContainer } from './style.css';
import ChipValue from './ChipValue';
import DecrementChipValueButton from './DecrementChipValueButton';
import IncrementChipValueButton from './IncrementChipValueButton';

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
        <DecrementChipValueButton />
        <ChipValue />
        <IncrementChipValueButton />
      </div>
    </div>
  );
};

export default ChipValueSelector;
