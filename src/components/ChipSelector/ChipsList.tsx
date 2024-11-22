import { motion } from 'framer-motion';

import { childrenVariant } from '@components/Drawer/Drawer';
import useDrawerContext from '@components/Drawer/contexts/useDrawerContext';
import { chipWithCurrency } from './ChipValueSelector/ChipValueSelector';
import useChipContext from './contexts/useChipContext';
import useChips from './hooks/useChips';
import {
  chipsListGridContainerStyle,
  chipsListGridItemStyle,
} from './style.css';

const ChipsList = () => {
  const { chips } = useChips();
  const { onChipSelect } = useChipContext();
  const { closeDrawer } = useDrawerContext();

  const handleChipSelect = (chip: number) => () => {
    onChipSelect(chip);
    closeDrawer();
  };

  return (
    <div className={chipsListGridContainerStyle}>
      {chips.map(chip => (
        <motion.div
          key={chip}
          onClick={handleChipSelect(chip)}
          variants={childrenVariant}
          className={chipsListGridItemStyle}
        >
          {chipWithCurrency(chip)}
        </motion.div>
      ))}
    </div>
  );
};

export default ChipsList;
