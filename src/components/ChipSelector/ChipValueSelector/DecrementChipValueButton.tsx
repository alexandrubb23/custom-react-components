import ChipValueButton from '../ChipValueButton/ChipValueButton';
import useChipContext from '../contexts/useChipContext';
import useChips from '../hooks/useChips';
import useDisableButton from '../hooks/useDisableButton';

const DecrementChipValueButton = () => {
  const { minAmount } = useChips();
  const { chipValue } = useChipContext();
  const { isDisabled } = useDisableButton();

  const animate = !isDisabled && minAmount !== chipValue;
  const disable = isDisabled || minAmount === chipValue;

  return (
    <ChipValueButton
      animateOnTap={animate}
      disabled={disable}
      min={minAmount}
      operation='decrement'
    />
  );
};

export default DecrementChipValueButton;
