import useDrawerContext from '@components/Drawer/contexts/useDrawerContext';
import useChipContext from '../contexts/useChipContext';

const useDisableButton = () => {
  const { chipValue } = useChipContext();
  const { isOpen } = useDrawerContext();

  const isDisabled = !isOpen && chipValue === 0;

  return { isDisabled };
};

export default useDisableButton;
