import {
  ComplexStyleRule,
  createVar,
  keyframes,
  style,
} from '@vanilla-extract/css';

const itemDividerStyle: ComplexStyleRule = {
  background: 'rgba(255, 255, 255, 0.2)',
  bottom: -6,
  content: '',
  gridColumn: 1 / -1,
  height: 1,
  left: 0,
  margin: '0 auto',
  position: 'absolute',
};

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

export const chipsListGridContainerStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 5,
  textAlign: 'center',
  padding: 5,
});

export const chipsListGridItemStyle = style({
  backgroundColor: '#FFF5E7',
  borderRadius: 20,
  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
  fontSize: '0.938rem',
  lineHeight: 0.91,
  margin: '3px 0',
  padding: '8px 0',
  position: 'relative',
  textShadow:
    '0 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(136, 136, 136, 0.2)',
  width: '100%',
  selectors: {
    '&::after': {
      ...itemDividerStyle,
      width: '100%',
    },
    '&:nth-child(n + 2):nth-child(odd):after': {
      ...itemDividerStyle,
      left: -5,
      width: 72,
    },
    '&:nth-child(n + 2):last-child:after': {
      display: 'none',
    },
    '&:nth-last-child(2):after': {
      display: 'none',
    },
    [`${chipsListGridContainerStyle} &:first-child`]: {
      gridColumn: 'span 2',
    },
  },
});
