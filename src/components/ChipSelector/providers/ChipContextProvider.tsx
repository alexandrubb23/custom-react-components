import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import ChipContext from '../contexts/ChipContext';

const ChipContextProvider = ({ children }: PropsWithChildren) => {
  const [chipValue, setChipValue] = useState(0);

  const onChipSelect = useCallback((value: number) => {
    setChipValue(value);
  }, []);

  const value = useMemo(
    () => ({ chipValue, onChipSelect }),
    [chipValue, onChipSelect]
  );

  return <ChipContext.Provider value={value}>{children}</ChipContext.Provider>;
};

export default ChipContextProvider;
