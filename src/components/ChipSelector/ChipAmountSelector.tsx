import { memo, useMemo } from 'react';
import { ChipContextType } from './contexts/ChipContext';
import { chipWithCurrency } from './ChipValueSelector';
import {
  chipsListItemStyle,
  chipsListStyle,
  chipsStyle,
  chipsTitleStyle,
} from './style.css';
import { motion, Variants } from 'framer-motion';
import useChips from './hooks/useChips';

type ChipsListProps = Pick<ChipContextType, 'onSelect'>;

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

const childrenVariant: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
};

const ChipAmountSelector = ({ onSelect }: ChipsListProps) => {
  const { chips } = useChips();

  return (
    <motion.div
      className={chipsStyle}
      initial='initial'
      animate='animate'
      variants={parentVariant}
    >
      <motion.h2 className={chipsTitleStyle} variants={childrenVariant}>
        Select Amount
      </motion.h2>
      <ul className={chipsListStyle}>
        {chips.map(chip => (
          <motion.li
            className={`child ${chipsListItemStyle}`}
            key={chip}
            onClick={() => onSelect(chip)}
            variants={childrenVariant}
          >
            {chipWithCurrency(chip)}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default memo(ChipAmountSelector);
