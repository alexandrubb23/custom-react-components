import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import DrawerContext, { DrawerContextType } from '../contexts/DrawerContext';
import { drawerStyle } from '../style.css';

export type HideOn = boolean | number | string;

export type DrawerProps = PropsWithChildren<{
  autoOpenDelay?: number;
}>;

const DrawerProvider = ({ children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const openDrawer = useCallback(() => {
    setIsOpen(true);
    setIsOpening(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    setIsOpening(false);
  }, []);

  const handleOpeningStart = useCallback(() => {
    setIsOpening(true);
  }, []);

  const handleOpeningComplete = useCallback(() => {
    setIsOpening(false);
  }, []);

  const value = useMemo(
    (): DrawerContextType => ({
      closeDrawer,
      handleOpeningComplete,
      handleOpeningStart,
      isOpen,
      isOpening,
      openDrawer,
    }),
    [isOpen, isOpening]
  );

  return (
    <DrawerContext.Provider value={value}>
      <div className={drawerStyle} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
