import { createContext } from 'react';

export type DrawerContextType = {
  handleIsOpened: () => void;
  handleToggleClick: () => void;
  isOpen: boolean;
  isOpening: boolean;
};

const DrawerContext = createContext<DrawerContextType>({
  handleIsOpened: () => null,
  handleToggleClick: () => null,
  isOpen: false,
  isOpening: false,
});

export default DrawerContext;
