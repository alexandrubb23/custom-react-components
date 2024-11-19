import { motion } from 'framer-motion';

import useDrawerContext from '../Drawer/contexts/useDrawerContext';
import Drawer from '../Drawer/Drawer';
import ChipAmountSelector from './ChipAmountSelector';
import ChipValueSelector from './ChipValueSelector';
import useChipContext from './contexts/useChipContext';
import { chipDrawerStyle } from './style.css';

const ChipSelector = () => {
  const { isOpen } = useDrawerContext();
  const { onSelect } = useChipContext();

  return (
    <div className='chip-drawer'>
      <Drawer.Content className={chipDrawerStyle}>
        {isOpen && <ChipAmountSelector onSelect={onSelect} />}
      </Drawer.Content>
      <motion.div animate='animation'>
        <ChipValueSelector />
      </motion.div>
    </div>
  );
};

export default ChipSelector;
