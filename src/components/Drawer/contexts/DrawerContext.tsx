import { createContext } from 'react';

export type DrawerContextType = {
  closeDrawer: () => void;
  handleOpeningComplete: () => void;
  handleOpeningStart: () => void;
  isOpen: boolean;
  isOpening: boolean;
  openDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType>({
  closeDrawer: () => null,
  handleOpeningComplete: () => null,
  handleOpeningStart: () => null,
  isOpen: false,
  isOpening: false,
  openDrawer: () => null,
});

export default DrawerContext;
