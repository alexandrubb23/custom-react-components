import { createContext } from 'react';

export type SelectChip = (value: number) => void;

export type ChipContextType = {
  chipValue: number;
  onSelect: SelectChip;
};

const ChipContext = createContext<ChipContextType>({
  chipValue: 0,
  onSelect: () => {},
});

export default ChipContext;
