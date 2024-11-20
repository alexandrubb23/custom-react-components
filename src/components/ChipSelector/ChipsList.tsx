import { motion } from 'framer-motion';

import { chipWithCurrency } from './ChipValueSelector/ChipValueSelector';
import useChipContext from './contexts/useChipContext';
import useChips from './hooks/useChips';
import { chipsListItemStyle, chipsListStyle } from './style.css';
import { childrenVariant } from '../Drawer/Drawer';
import useDrawerContext from '../Drawer/contexts/useDrawerContext';

const ChipsList = () => {
  const { chips } = useChips();
  const { onChipSelect } = useChipContext();
  const { closeDrawer } = useDrawerContext();

  const handleChipSelect = (chip: number) => () => {
    onChipSelect(chip);
    closeDrawer();
  };

  return (
    <ul className={chipsListStyle}>
      {chips.map(chip => (
        <motion.li
          className={chipsListItemStyle}
          key={chip}
          onClick={handleChipSelect(chip)}
          variants={childrenVariant}
        >
          {chipWithCurrency(chip)}
        </motion.li>
      ))}
    </ul>
  );
};

export default ChipsList;
