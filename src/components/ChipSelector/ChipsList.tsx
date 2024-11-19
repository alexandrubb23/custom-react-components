import { motion } from 'framer-motion';

import { chipWithCurrency } from './ChipValueSelector';
import useChipContext from './contexts/useChipContext';
import useChips from './hooks/useChips';
import { chipsListItemStyle, chipsListStyle } from './style.css';
import { childrenVariant } from '../Drawer/Drawer';

const ChipsList = () => {
  const { chips } = useChips();
  const { onSelect } = useChipContext();

  return (
    <ul className={chipsListStyle}>
      {chips.map(chip => (
        <motion.li
          className={chipsListItemStyle}
          key={chip}
          onClick={() => onSelect(chip)}
          variants={childrenVariant}
        >
          {chipWithCurrency(chip)}
        </motion.li>
      ))}
    </ul>
  );
};

export default ChipsList;
