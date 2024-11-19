import { motion, Variants } from 'framer-motion';
import { PropsWithClassNameAndChildren } from '../../types/generics';
import useDrawerContext from './contexts/useDrawerContext';
import DrawerProvider, { type DrawerProps } from './providers/DrawerProvider';
import { drawerContentStyle } from './style.css';

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
  staggeredDuration = 0.05,
}: ConfigValue = {}): Variants => ({
  initial: { opacity: 0, height: initialHeight },
  animate: {
    bottom,
    height: animateHeight,
    opacity: 1,
    transition: {
      staggerChildren: staggeredDuration,
      staggerDirection: -1,
    },
  },
});

export const childrenVariant: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
};

const Drawer = ({ hideOn, children, open }: DrawerProps) => (
  <DrawerProvider hideOn={hideOn} open={open}>
    {children}
  </DrawerProvider>
);

const Content = ({
  children,
  className = '',
}: PropsWithClassNameAndChildren) => {
  const { handleIsOpened } = useDrawerContext();

  return (
    <motion.div
      animate='animate'
      className={`${drawerContentStyle} ${className}`}
      initial='initial'
      onAnimationComplete={handleIsOpened}
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
  const { handleToggleClick, isOpening } = useDrawerContext();

  const openDrawer = () => {
    if (isOpening) return;
    handleToggleClick();
  };

  return (
    <Component className={className} onClick={openDrawer}>
      {children}
    </Component>
  );
};

Drawer.Content = Content;
Drawer.Toggle = Toggle;

export default Drawer;
