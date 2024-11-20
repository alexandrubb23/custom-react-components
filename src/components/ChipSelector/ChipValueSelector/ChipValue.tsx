import { Fragment } from 'react';

import useDrawerContext from '../../Drawer/contexts/useDrawerContext';
import Drawer from '../../Drawer/Drawer';
import ScaleOnTap from '../ChipValueButton/ScaleOnTap';
import useChipContext from '../contexts/useChipContext';
import { chipWithCurrency } from './ChipValueSelector';
import {
  chipValueSelectorContainerStyle,
  chipValueSelectorTextStyle,
  chipValueSelectorToggle,
  chipValueSelectorStyle,
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
