import { ComplexStyleRule, style } from '@vanilla-extract/css';

const commonButtonStyle: ComplexStyleRule = {
  backgroundColor: 'black',
  boxShadow:
    '0 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(136, 136, 136, 0.2)',
  content: '',
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export const roundedButtonStyle = style({
  backgroundColor: '#beb3a5',
  borderRadius: '50%',
  fontSize: 0,
  height: 40,
  margin: 0,
  position: 'relative',
  width: 40,
  selectors: {
    '&::before': {
      ...commonButtonStyle,
      height: 1,
      width: '0.875rem',
    },
  },
});

export const roundedPlusButtonStyle = style([
  roundedButtonStyle,
  {
    selectors: {
      '&::after': {
        ...commonButtonStyle,
        height: '0.875rem',
        width: 1,
      },
    },
  },
]);
