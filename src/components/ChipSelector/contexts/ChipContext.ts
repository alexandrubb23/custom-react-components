import { createContext } from 'react';

export type SelectChip = (value: number) => void;

export type ChipContextType = {
  chipValue: number;
  onChipSelect: SelectChip;
};

const ChipContext = createContext<ChipContextType>({
  chipValue: 0,
  onChipSelect: () => {},
});

export default ChipContext;
