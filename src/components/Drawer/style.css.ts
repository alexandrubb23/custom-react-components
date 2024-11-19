import { style } from '@vanilla-extract/css';

export const drawerStyle = style({
  alignContent: 'center',
  borderRadius: 8,
  margin: '0 auto',
  position: 'relative',
  textAlign: 'center',
  width: 150,
});

export const drawerContentStyle = style({
  height: 0,
  position: 'absolute',
  width: '100%',
});
