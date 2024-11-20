import { createContext } from 'react';

export type DrawerContextType = {
  isOpen: boolean;
  closeDrawer: () => void;
  openDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType>({
  isOpen: false,
  closeDrawer: () => null,
  openDrawer: () => null,
});

export default DrawerContext;
