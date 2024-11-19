import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import('./style.css');
import ChipSelectorDrawer from './components/ChipSelector/ChipSelectorDrawer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChipSelectorDrawer />
  </StrictMode>
);