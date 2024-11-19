import { useMemo } from 'react';

export const useChips = () => {
  // TODO: Fetch chips from API using a selector
  const chips = [500, 100, 250, 10, 50, 1, 5];

  const minAmount = useMemo(() => Math.min(...chips), [chips]);

  const maxAmount = useMemo(() => Math.max(...chips), [chips]);

  return { chips, maxAmount, minAmount };
};

export default useChips;
