import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useElementWasClicked from '../../../hooks/useElementWasClicked';
import DrawerContext from '../contexts/DrawerContext';
import { useTimeout } from 'usehooks-ts';
import { drawerStyle } from '../style.css';

export type HideOn = boolean | number | string;

export type DrawerProps = PropsWithChildren<{
  hideOn?: HideOn;
  open?: boolean;
}>;

const AUTO_OPEN_DELAY = 300;

const DrawerProvider = ({ hideOn, children, open = false }: DrawerProps) => {
  useElementWasClicked(() => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(open);

  useTimeout(
    () => {
      setIsOpen(open);
    },
    open ? AUTO_OPEN_DELAY : null
  );

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [hideOn, open]);

  const handleToggleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const value = useMemo(
    () => ({
      handleToggleClick,
      isOpen,
    }),
    [handleToggleClick, isOpen]
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
