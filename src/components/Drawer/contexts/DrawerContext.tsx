import { createContext } from 'react';

export type DrawerContextType = {
  handleToggleClick: () => void;
  isOpen: boolean;
};

const DrawerContext = createContext<DrawerContextType>({
  handleToggleClick: () => null,
  isOpen: false,
});

export default DrawerContext;
