import { motion, Variants } from 'framer-motion';
import { PropsWithChildren, useCallback, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside, useTimeout } from 'usehooks-ts';

import { drawerContentStyle } from './style.css';
import DrawerProvider, { type DrawerProps } from './providers/DrawerProvider';
import type {
  StringOrNumber,
  PropsWithClassNameAndChildren,
} from '@marbleTypes/generics';
import useDrawerContext from './contexts/useDrawerContext';
import useAnimationState from './hooks/useAnimationState';

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
  autoOpenDelay = 0,
}: PropsWithChildren<{
  autoOpenDelay?: number;
}>) => {
  const { ref, isRunning } = useAnimationState<HTMLDivElement>();
  const { closeDrawer, openDrawer } = useDrawerContext();

  useOnClickOutside(ref, () => {
    if (isRunning) return;
    closeDrawer();
  });

  const delay = autoOpenDelay * 1000;
  useTimeout(openDrawer, delay);

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
