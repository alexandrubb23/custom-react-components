import { motion } from 'framer-motion';

import ChipAmountSelector from './ChipAmountSelector';
import ChipValueSelector from './ChipValueSelector/ChipValueSelector';
import useDrawerContext from '../Drawer/contexts/useDrawerContext';

const ChipSelector = () => {
  const { isOpen } = useDrawerContext();

  return (
    <>
      {isOpen && <ChipAmountSelector />}
      <motion.div animate='animation'>
        <ChipValueSelector />
      </motion.div>
    </>
  );
};

export default ChipSelector;
