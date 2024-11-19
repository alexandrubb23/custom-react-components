import ChipValueButton from '../ChipValueButton/ChipValueButton';
import useChipContext from '../contexts/useChipContext';
import useChips from '../hooks/useChips';
import useDisableButton from '../hooks/useDisableButton';

const DecreaseChipValueButton = () => {
  const { minAmount } = useChips();
  const { chipValue } = useChipContext();
  const { isDisabled } = useDisableButton();

  const animateOnDecrement = !isDisabled && minAmount !== chipValue;
  const disabledDecrement = isDisabled || minAmount === chipValue;

  return (
    <ChipValueButton
      animateOnTap={animateOnDecrement}
      disabled={disabledDecrement}
      operator='-'
    />
  );
};

export default DecreaseChipValueButton;
