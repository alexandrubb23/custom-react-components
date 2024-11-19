import { motion, Variants } from 'framer-motion';

import { chipsListItemStyle, chipsListStyle } from './style.css';
import useChipContext from './contexts/useChipContext';
import useChips from './hooks/useChips';
import { chipWithCurrency } from './ChipValueSelector';

export const childrenVariant: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
};

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
