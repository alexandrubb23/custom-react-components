import { useState } from 'react';
import { useTimeout } from 'usehooks-ts';

import Drawer from '../Drawer/Drawer';
import ChipSelector from './ChipSelector';
import ChipContextProvider from './providers/ChipContextProvider';

const ChipDrawerSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Simulate bet opening
  useTimeout(() => {
    // setIsOpen(true);
  }, 3000);

  // Simulate bet closing
  useTimeout(() => {
    // setIsOpen(false);
  }, 6000);

  return (
    <ChipContextProvider
      renderDrawer={({ chipValue }) => (
        <Drawer hideOn={chipValue} open={isOpen}>
          <ChipSelector />
        </Drawer>
      )}
    />
  );
};

export default ChipDrawerSelector;
