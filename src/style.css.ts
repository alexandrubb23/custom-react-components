import { globalFontFace, globalStyle } from '@vanilla-extract/css';

// https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Space+Mono:ital@1&display=swap

globalFontFace('Orbitron', {
  src: 'url("assets/Orbitron.ttf")',
});

globalStyle('body', {
  fontFamily: 'Orbitron',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  margin: 0,
  backgroundColor: '#1a1d21',
  fontSize: '0.5rem',
});

globalStyle('button', {
  border: 'none',
  cursor: 'pointer',
});
