import { memo } from 'react';
import { ChipContextType } from './contexts/ChipContext';
import { chipWithCurrency } from './ChipValue';
import { chipsListItemStyle, chipsListStyle } from './style.css';

type ChipsListProps = Pick<ChipContextType, 'onSelect'>;

const ChipsList = ({ onSelect }: ChipsListProps) => {
  const chips = [500, 100, 250, 10, 50, 1, 5];

  return (
    <div style={{ position: 'relative', zIndex: 99 }}>
      <h2>Select Amount</h2>
      <ul className={chipsListStyle}>
        {chips.map(chip => (
          <li
            className={chipsListItemStyle}
            key={chip}
            onClick={() => onSelect(chip)}
          >
            {chipWithCurrency(chip)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ChipsList);
