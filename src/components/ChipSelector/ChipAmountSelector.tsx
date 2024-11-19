import { motion, Variants } from 'framer-motion';

import { chipDrawerStyle, chipsStyle, chipsTitleStyle } from './style.css';
import ChipsList, { childrenVariant } from './ChipsList';
import Drawer from '../Drawer/Drawer';

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

const ChipAmountSelector = () => {
  return (
    <Drawer.Content className={chipDrawerStyle}>
      <motion.div
        className={chipsStyle}
        initial='initial'
        animate='animate'
        variants={parentVariant}
      >
        <motion.h2 className={chipsTitleStyle} variants={childrenVariant}>
          Select Amount
        </motion.h2>
        <ChipsList />
      </motion.div>
    </Drawer.Content>
  );
};

export default ChipAmountSelector;
