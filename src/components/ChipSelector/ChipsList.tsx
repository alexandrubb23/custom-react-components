import { memo } from 'react';
import { ChipContextType } from './contexts/ChipContext';
import { chipWithCurrency } from './ChipValue';
import { chipsListItemStyle, chipsListStyle, chipsStyle } from './style.css';
import { motion, Variants } from 'framer-motion';

type ChipsListProps = Pick<ChipContextType, 'onSelect'>;

const parentVariant: Variants = {
  initial: { opacity: 0 },
  /**
   * Here we are defining @param staggerChildren with 1sec.
   * You can change this time as per your need.
   * 1st child will not get delayed. delay starts from 2nd child onwards.
   * 2nd child animation will start after: 1sec
   * 2rd child animation will start after: 2sec
   * 4th child animation will start after: 3sec
   * and so on...
   */
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const childrenVariant: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
};

const ChipsList = ({ onSelect }: ChipsListProps) => {
  const chips = [500, 100, 250, 10, 50, 1, 5];

  return (
    <div className={chipsStyle}>
      <h2
        style={{
          color: '#FFF5E7',
          fontSize: '0.688rem',
          fontWeight: 400,
        }}
      >
        Select Amount
      </h2>
      <motion.ul
        className={chipsListStyle}
        initial='initial'
        animate='animate'
        variants={parentVariant}
      >
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
      </motion.ul>
    </div>
  );
};

export default memo(ChipsList);
