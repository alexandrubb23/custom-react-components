import { motion, useTime, Variants } from 'framer-motion';
import { PropsWithClassNameAndChildren } from '../../types/generics';
import useDrawerContext from './contexts/useDrawerContext';
import DrawerProvider, { type DrawerProps } from './providers/DrawerProvider';
import { drawerContentStyle } from './style.css';
import { useOnClickOutside, useTimeout } from 'usehooks-ts';
import { Fragment, PropsWithChildren, useRef } from 'react';

type ToggleProps = PropsWithClassNameAndChildren<{
  as?: keyof JSX.IntrinsicElements;
}>;

type ConfigValue = {
  initialHeight?: string | number;
  animateHeight?: number;
  bottom?: string | number;
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
  const { closeDrawer, openDrawer, isOpening } = useDrawerContext();

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (isOpening) return;
    closeDrawer();
  });

  const delay = autoOpenDelay ? autoOpenDelay * 1000 : null;
  useTimeout(openDrawer, delay);

  return <div ref={ref}>{children}</div>;
};

const Content = ({
  children,
  className = '',
}: PropsWithClassNameAndChildren) => {
  const { handleOpeningStart, handleOpeningComplete } = useDrawerContext();

  return (
    <motion.div
      animate='animate'
      className={`${drawerContentStyle} ${className}`}
      initial='initial'
      onAnimationComplete={handleOpeningComplete}
      onAnimationStart={handleOpeningStart}
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
