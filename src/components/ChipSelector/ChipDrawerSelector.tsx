import Drawer from '@components/Drawer/Drawer';
import ChipSelector from './ChipSelector';
import ChipContextProvider from './providers/ChipContextProvider';

const AUTO_OPEN_DELAY = 0.5;

const ChipDrawerSelector = () => (
  <Drawer autoOpenDelay={AUTO_OPEN_DELAY}>
    <ChipContextProvider>
      <ChipSelector />
    </ChipContextProvider>
  </Drawer>
);

export default ChipDrawerSelector;
