import { PropsWithClassNameAndChildren } from '../../types/generics';
import useDrawerContext from './contexts/useDrawerContext';
import DrawerProvider, { type DrawerProps } from './providers/DrawerProvider';
import { drawerContentStyle, openDrawerStyle } from './style.css';

type ToggleProps = PropsWithClassNameAndChildren<{
  as?: keyof JSX.IntrinsicElements;
}>;

const Drawer = ({ hideOn, children, open }: DrawerProps) => (
  <DrawerProvider hideOn={hideOn} open={open}>
    {children}
  </DrawerProvider>
);

const Content = ({ children, className }: PropsWithClassNameAndChildren) => {
  const { isOpen } = useDrawerContext();

  const activeClass = isOpen ? openDrawerStyle : '';

  return (
    <div className={`${drawerContentStyle} ${activeClass} ${className}`}>
      {children}
    </div>
  );
};

const Toggle = ({
  as: Component = 'div', // Render as a custom HTML tag or React component
  children,
  className,
}: ToggleProps) => {
  const { handleToggleClick } = useDrawerContext();

  return (
    <Component className={className} onClick={handleToggleClick}>
      {children}
    </Component>
  );
};

Drawer.Content = Content;
Drawer.Toggle = Toggle;

export default Drawer;
