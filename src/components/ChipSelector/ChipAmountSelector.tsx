import { motion } from 'framer-motion';

import Drawer, { childrenVariant, parentVariant } from '../Drawer/Drawer';
import ChipsList from './ChipsList';
import { chipDrawerStyle, chipsStyle, chipsTitleStyle } from './style.css';

const ChipAmountSelector = () => {
  return (
    <Drawer.Content className={chipDrawerStyle}>
      <motion.div
        className={chipsStyle}
        initial='initial'
        animate='animate'
        variants={parentVariant()}
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
