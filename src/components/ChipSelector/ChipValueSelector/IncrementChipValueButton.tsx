import ChipValueButton from '../ChipValueButton/ChipValueButton';
import { roundedPlusButtonStyle } from '../ChipValueButton/style.css';
import useDisableButton from '../hooks/useDisableButton';

const IncrementChipValueButton = () => {
  const { isDisabled } = useDisableButton();

  return (
    <ChipValueButton
      animateOnTap={!isDisabled}
      className={roundedPlusButtonStyle}
      disabled={isDisabled}
      operation='increment'
    />
  );
};

export default IncrementChipValueButton;
