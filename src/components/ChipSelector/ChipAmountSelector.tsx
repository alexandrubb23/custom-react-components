import { memo } from 'react';
import { ChipContextType } from './contexts/ChipContext';
import { chipWithCurrency } from './ChipValueSelector';
import { chipsListItemStyle, chipsListStyle, chipsStyle } from './style.css';
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

const ChipAmountSelector = ({ onSelect }: ChipsListProps) => {
  const chips = [500, 100, 250, 10, 50, 1, 5];

  return (
    <motion.div
      className={chipsStyle}
      initial='initial'
      animate='animate'
      variants={parentVariant}
    >
      <motion.h2
        className='child'
        variants={childrenVariant}
        style={{
          color: '#FFF5E7',
          fontSize: '0.688rem',
          fontWeight: 400,
        }}
      >
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
