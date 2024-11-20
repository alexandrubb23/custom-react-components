import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import DrawerContext, { DrawerContextType } from '../contexts/DrawerContext';
import { drawerStyle } from '../style.css';

export type HideOn = boolean | number | string;

export type DrawerProps = PropsWithChildren<{
  autoOpenDelay?: number;
}>;

const DrawerProvider = ({ children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const setDrawerState = useCallback(
    (isOpen: boolean) => () => {
      setIsOpen(isOpen);
    },
    []
  );

  const value = useMemo(
    (): DrawerContextType => ({
      isOpen,
      openDrawer: setDrawerState(true),
      closeDrawer: setDrawerState(false),
    }),
    [isOpen]
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
