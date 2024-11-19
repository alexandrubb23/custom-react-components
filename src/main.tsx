import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import('./style.css');
import ChipDrawerSelector from './components/ChipSelector/ChipDrawerSelector';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChipDrawerSelector />
  </StrictMode>
);
