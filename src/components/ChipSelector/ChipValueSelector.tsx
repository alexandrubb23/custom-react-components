import { assignInlineVars } from '@vanilla-extract/dynamic';

import useDrawerContext from '../Drawer/contexts/useDrawerContext';
import Drawer from '../Drawer/Drawer';
import ChipValueButton from './ChipValueButton/ChipValueButton';
import ScaleOnTap from './ChipValueButton/ScaleOnTap';
import { roundedPlusButtonStyle } from './ChipValueButton/style.css';
import useChipContext from './contexts/useChipContext';
import useChips from './hooks/useChips';
import {
  betTextStyle,
  betValueStyle,
  borderedContainerStyle,
  chipSelectedValueOutlined,
  chipValueAnimation,
  chipValueStyle,
  selectedChipValueStyle,
  squeeze,
} from './style.css';
import { Fragment } from 'react/jsx-runtime';

const CURRENCY = '€';

export const squeezeAnimation = (start: boolean, duration = 0.3) =>
  start ? `${squeeze} ${duration}s forwards` : 'none';

export const chipWithCurrency = (value: number) => `${CURRENCY}${value}`;

const ChipValueSelector = () => {
  const { minAmount } = useChips();

  const { isOpen, isOpening } = useDrawerContext();
  const { chipValue } = useChipContext();

  const style = assignInlineVars({
    [chipValueAnimation]: squeezeAnimation(isOpen),
  });

  const disabledButton = (!isOpen && chipValue === 0) || chipValue === 0;

  const animateOnDecrement = !disabledButton && minAmount !== chipValue;
  const disabledDecrement = disabledButton || minAmount === chipValue;

  const AnimateBetOnTap = !isOpening ? ScaleOnTap : Fragment;

  return (
    <div
      className={`${chipValueStyle} ${!isOpen ? borderedContainerStyle : ''}`}
      style={style}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 99,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ChipValueButton
          animateOnTap={animateOnDecrement}
          disabled={disabledDecrement}
          operator='-'
        />

        <Drawer.Toggle className={chipSelectedValueOutlined}>
          <AnimateBetOnTap>
            <div className={selectedChipValueStyle}>
              <div className={betTextStyle}>BET</div>
              <div className={betValueStyle}>{chipWithCurrency(chipValue)}</div>
            </div>
          </AnimateBetOnTap>
        </Drawer.Toggle>

        <ChipValueButton
          animateOnTap={!disabledButton}
          className={roundedPlusButtonStyle}
          disabled={disabledButton}
          operator='+'
        />
      </div>
    </div>
  );
};

export default ChipValueSelector;
