import moment from 'moment';
import {FC} from 'react';
import './style.scss';

interface CustomTimestampProps {
  timestamp: string;
}

export const CustomTimestamp: FC<CustomTimestampProps> = ({timestamp}) => {
  return (
    <div className="timestamp">
      {moment(timestamp).fromNow()}
      <span className="tooltiptext">{timestamp}</span>
    </div>
  );
};
