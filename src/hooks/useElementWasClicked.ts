import { useEffect } from 'react';

const useElementWasClicked = (cb: () => void, target = document.body) => {
  useEffect(() => {
    const listener = () => {
      cb();
    };

    target.addEventListener('click', listener);

    return () => {
      target.removeEventListener('click', listener);
    };
  }, [cb, target]);
};

export default useElementWasClicked;
