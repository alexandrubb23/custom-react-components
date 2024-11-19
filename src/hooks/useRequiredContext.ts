import { Context, useContext } from 'react';

const useRequiredContext = <T>(context: Context<T>) => {
  const contextValue = useContext(context);

  if (!contextValue) {
    throw new Error(
      `Context ${context.displayName} must be used within a ${context.displayName}Provider`
    );
  }

  return contextValue;
};

export default useRequiredContext;
