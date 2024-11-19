import ChipValueButton from '../ChipValueButton/ChipValueButton';
import { roundedPlusButtonStyle } from '../ChipValueButton/style.css';
import useDisableButton from '../hooks/useDisableButton';

const IncreaseChipValueButton = () => {
  const { isDisabled } = useDisableButton();

  return (
    <ChipValueButton
      animateOnTap={!isDisabled}
      className={roundedPlusButtonStyle}
      disabled={isDisabled}
      operator='+'
    />
  );
};

export default IncreaseChipValueButton;
