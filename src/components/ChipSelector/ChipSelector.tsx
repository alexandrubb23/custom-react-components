import { motion } from 'framer-motion';

import useDrawerContext from '../Drawer/contexts/useDrawerContext';
import Drawer from '../Drawer/Drawer';
import ChipsList from './ChipsList';
import ChipValue from './ChipValue';
import useChipContext from './contexts/useChipContext';
import { chipDrawerStyle } from './style.css';

const ChipSelector = () => {
  const { isOpen } = useDrawerContext();
  const { onSelect } = useChipContext();

  return (
    <div className='chip-drawer'>
      <Drawer.Content className={chipDrawerStyle}>
        {isOpen && <ChipsList onSelect={onSelect} />}
      </Drawer.Content>
      <motion.div animate='animation'>
        <ChipValue />
      </motion.div>
    </div>
  );
};

export default ChipSelector;
