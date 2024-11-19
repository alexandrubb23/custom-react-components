import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';

export const squeeze = keyframes({
  '0%': {
    padding: 0,
  },
  '100%': {
    padding: '0 5px',
  },
});

export const borderedContainerStyle = style({
  selectors: {
    '&::before': {
      position: 'absolute',
      content: '',
      width: '100%',
      height: '100%',
      left: -1,
      top: -1,
      borderRadius: 'inherit',
      padding: 1,
      backgroundImage: `linear-gradient(
        214.04deg,
        rgba(255, 229, 179, 0.7) -12.42%,
        #fdf8ef 14.6%,
        #895e50 34.42%,
        #fdfbef 51.33%,
        rgba(137, 97, 80, 0.813607) 69.6%,
        rgba(222, 162, 107, 0.7) 80.24%
      )`,
    },
    '&::after': {
      position: 'absolute',
      content: '',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      borderRadius: 'inherit',
      margin: 'auto',
      background: `
      linear-gradient(
        122.88deg, 
        #3e3220 -16.28%, 
        #9c8d76 46.33%, 
        #3f2d11 103.12%
      ), 
      linear-gradient(
        0deg, 
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.2)
      )`,
    },
  },
});

export const chipDrawerStyle = style([
  borderedContainerStyle,
  {
    bottom: 0,
    backgroundBlendMode: 'overlay',
    borderRadius: 24,
  },
]);

export const chipValueAnimation = createVar();

export const chipValueStyle = style({
  animation: chipValueAnimation,
  borderRadius: '24px' /* Apply rounded corners to the parent */,
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
});

export const fakeBorderStyle = style({
  padding: 1,
  borderRadius: '24px' /* Match the parent's border-radius */,
  backgroundImage: `linear-gradient(
    214.04deg,
    rgba(255, 229, 179, 0.7) -12.42%,
    #fdf8ef 14.6%,
    #895e50 34.42%,
    #fdfbef 51.33%,
    rgba(137, 97, 80, 0.813607) 69.6%,
    rgba(222, 162, 107, 0.7) 80.24%
  )`,
});

export const chipSelectedValueOutlined = style({
  alignItems: 'center',
  color: '#fff5e7',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const chipsStyle = style({
  zIndex: 99,
  position: 'absolute',
  bottom: 50,
  width: '100%',
});

export const chipsTitleStyle = style({
  color: '#FFF5E7',
  fontSize: '0.688rem',
  fontWeight: 400,
  margin: 0,
});

export const chipsListStyle = style({
  display: 'grid',
  gap: 5,
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto repeat(3, 1fr)',
  listStyleType: 'none',
  margin: 0,
  padding: 5,
});

export const chipsListItemStyle = style({
  backgroundColor: 'beige',
  borderRadius: 20,
  cursor: 'pointer',
  fontSize: '0.938rem',
  lineHeight: 0.91,
  margin: '3px 0',
  padding: '8px 0',
  width: '100%',
  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.3)',
  textShadow:
    '0 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(136, 136, 136, 0.2)',
});

export const selectedChipValueStyle = style({
  display: 'flex',
  gap: 3,
  flexDirection: 'column',
  textShadow: '0px 2px 2px rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) 0px 1px 5px',
});

export const betTextStyle = style({
  color: '#CCC2B3',
  fontSize: 10,
  lineHeight: 1,
});

export const betValueStyle = style({ lineHeight: 1, fontSize: '1rem' });

globalStyle(`ul li:nth-child(1)`, {
  gridColumn: '1 / -1',
});

globalStyle(`ul li:nth-child(1n)::after`, {
  background: '#958B7D',
  content: '',
  display: 'block',
  gridColumn: 1 / -1,
  height: 1,
  left: 0,
  margin: '13px 7px 0',
  position: 'absolute',
  width: 'calc(100% - 13px)',
});

globalStyle(`ul li:nth-last-child(2)::after`, {
  display: 'none',
});

globalStyle(`ul li:last-child::after`, {
  display: 'none',
});
