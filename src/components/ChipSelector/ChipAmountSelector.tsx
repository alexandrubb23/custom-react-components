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

export const useChips = () => {
  // TODO: Fetch chips from API using a selector
  const chips = [500, 100, 250, 10, 50, 1, 5];

  const minAmount = useMemo(() => Math.min(...chips), [chips]);

  // TODO: The max amount is not used in the current implementation but will be used in the future
  const maxAmount = useMemo(() => Math.max(...chips), [chips]);

  return { chips, maxAmount, minAmount };
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
