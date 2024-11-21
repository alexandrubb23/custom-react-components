import { Fragment } from 'react';

import { chipWithCurrency } from './ChipValueSelector';
import Drawer from '@components/Drawer/Drawer';
import ScaleOnTap from '../ChipValueButton/ScaleOnTap';
import useChipContext from '../contexts/useChipContext';
import useDrawerContext from '@components/Drawer/contexts/useDrawerContext';
import {
  chipValueSelectorContainerStyle,
  chipValueSelectorStyle,
  chipValueSelectorTextStyle,
  chipValueSelectorToggle,
} from './style.css';

const ChipValue = () => {
  const { chipValue } = useChipContext();
  const { isOpen } = useDrawerContext();

  const AnimateBetOnTap = !isOpen ? ScaleOnTap : Fragment;

  return (
    <Drawer.Toggle className={chipValueSelectorToggle}>
      <AnimateBetOnTap>
        <div className={chipValueSelectorContainerStyle}>
          <div className={chipValueSelectorTextStyle}>BET</div>
          <div className={chipValueSelectorStyle}>
            {chipWithCurrency(chipValue)}
          </div>
        </div>
      </AnimateBetOnTap>
    </Drawer.Toggle>
  );
};

export default ChipValue;
