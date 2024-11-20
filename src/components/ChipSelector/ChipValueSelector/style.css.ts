import { style } from '@vanilla-extract/css';

export const chipValueSelectorContainer = style({
  position: 'relative',
  zIndex: 99,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const chipValueSelectorToggle = style({
  alignItems: 'center',
  color: '#fff5e7',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const chipValueSelectorContainerStyle = style({
  display: 'flex',
  gap: 3,
  flexDirection: 'column',
  textShadow: '0px 2px 2px rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) 0px 1px 5px',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
});

export const chipValueSelectorTextStyle = style({
  color: '#CCC2B3',
  fontSize: 10,
  lineHeight: 1,
});

export const chipValueSelectorStyle = style({
  lineHeight: 1,
  fontSize: '1rem',
});
