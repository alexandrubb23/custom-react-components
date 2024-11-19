import React, { useCallback, useMemo, useState } from 'react';
import ChipContext, { ChipContextType } from '../contexts/ChipContext';

type ChipContextProviderProps = {
  renderDrawer: (value: ChipContextType) => React.ReactNode;
};

const ChipContextProvider = ({ renderDrawer }: ChipContextProviderProps) => {
  const [chipValue, setChipValue] = useState(0);

  const onSelect = useCallback((value: number) => {
    setChipValue(value);
  }, []);

  const value = useMemo(() => ({ chipValue, onSelect }), [chipValue, onSelect]);

  return (
    <ChipContext.Provider value={value}>
      {renderDrawer(value)}
    </ChipContext.Provider>
  );
};

export default ChipContextProvider;
