import { motion } from 'framer-motion';

import { chipDrawerStyle, chipsStyle, chipsTitleStyle } from './style.css';
import ChipsList from './ChipsList';
import Drawer, { childrenVariant, parentVariant } from '../Drawer/Drawer';

const ChipAmountSelector = () => {
  return (
    <Drawer.Content className={chipDrawerStyle}>
      <motion.div
        animate='animate'
        className={chipsStyle}
        initial='initial'
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
