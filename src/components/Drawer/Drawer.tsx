import { motion, Variants } from 'framer-motion';
import { PropsWithChildren, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside, useTimeout } from 'usehooks-ts';

import { drawerContentStyle } from './style.css';
import DrawerProvider, { type DrawerProps } from './providers/DrawerProvider';
import type {
  StringOrNumber,
  PropsWithClassNameAndChildren,
} from '@marbleTypes/generics';
import useDrawerContext from './contexts/useDrawerContext';

type ToggleProps = PropsWithClassNameAndChildren<{
  as?: keyof JSX.IntrinsicElements;
}>;

type ConfigValue = {
  animateHeight?: number;
  bottom?: StringOrNumber;
  initialHeight?: StringOrNumber;
  staggeredDuration?: number;
};

// TODO: Make the Drawer component more flexible by allowing the user to pass in custom variants
export const parentVariant = ({
  animateHeight = 240,
  bottom = -5,
  initialHeight = '100%',
  staggeredDuration = 0.03,
}: ConfigValue = {}): Variants => ({
  initial: { opacity: 0, height: initialHeight },
  animate: {
    bottom,
    height: animateHeight,
    opacity: 1,
    transition: {
      staggerChildren: staggeredDuration,
      staggerDirection: 1,
    },
  },
});

export const childrenVariant: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
};

const Drawer = ({ autoOpenDelay, children }: DrawerProps) => {
  return (
    <DrawerProvider>
      <DrawerChildren autoOpenDelay={autoOpenDelay}>{children}</DrawerChildren>
    </DrawerProvider>
  );
};

const DrawerChildren = ({
  children,
  autoOpenDelay,
}: PropsWithChildren<{
  autoOpenDelay?: number;
}>) => {
  const ref = useRef(null);
  const [canBeClosed, setCanBeClosed] = useState(false);
  const { closeDrawer, openDrawer } = useDrawerContext();

  useOnClickOutside(ref, () => {
    if (!canBeClosed) return;
    closeDrawer();
  });

  const handleCanBeClosed = () => {
    setCanBeClosed(true);
  };

  const handleCanNotBeClosed = () => {
    setCanBeClosed(false);
  };

  const delay = autoOpenDelay ? autoOpenDelay * 1000 : null;
  useTimeout(openDrawer, delay);

  useEventListener('animationend', handleCanBeClosed, ref);
  useEventListener('animationstart', handleCanNotBeClosed, ref);

  return <div ref={ref}>{children}</div>;
};

const Content = ({
  children,
  className = '',
}: PropsWithClassNameAndChildren) => {
  return (
    <motion.div
      animate='animate'
      className={`${drawerContentStyle} ${className}`}
      initial='initial'
      variants={parentVariant()}
    >
      {children}
    </motion.div>
  );
};

const Toggle = ({
  as: Component = 'div', // Render as a custom HTML tag or React component
  children,
  className,
}: ToggleProps) => {
  const { openDrawer } = useDrawerContext();

  return (
    <Component className={className} onClick={openDrawer}>
      {children}
    </Component>
  );
};

Drawer.Content = Content;
Drawer.Toggle = Toggle;

export default Drawer;
