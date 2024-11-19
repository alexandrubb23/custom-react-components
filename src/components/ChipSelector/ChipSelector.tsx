import { motion } from 'framer-motion';

import ChipAmountSelector from './ChipAmountSelector';
import ChipValueSelector from './ChipValueSelector';
import useDrawerContext from '../Drawer/contexts/useDrawerContext';

const ChipSelector = () => {
  const { isOpen } = useDrawerContext();

  return (
    <div className='chip-drawer'>
      {isOpen && <ChipAmountSelector />}
      <motion.div animate='animation'>
        <ChipValueSelector />
      </motion.div>
    </div>
  );
};

export default ChipSelector;
