import { style, keyframes } from '@vanilla-extract/css';

const openDrawer = keyframes({
  '0%': {
    height: 0,
  },
  '25%': {
    opacity: 0.25,
  },
  '50%': {
    opacity: 0.5,
  },
  '75%': {
    opacity: 0.75,
  },
  '100%': {
    bottom: 0,
    height: 240,
    opacity: 1,
  },
});

export const drawerStyle = style({
  alignContent: 'center',
  borderRadius: 8,
  margin: '0 auto',
  position: 'relative',
  textAlign: 'center',
  width: 150,
});

export const openDrawerStyle = style({
  animation: `${openDrawer} 0.7s ease forwards`,
});

export const drawerContentStyle = style({
  height: 0,
  position: 'absolute',
  width: '100%',
});
