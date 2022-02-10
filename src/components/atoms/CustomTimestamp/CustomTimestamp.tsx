import moment from 'moment';
import {FC} from 'react';
import './style.scss';

interface CustomTimestampProps {
  timestamp: string;
}

export const CustomTimestamp: FC<CustomTimestampProps> = ({timestamp}) => {
  return (
    <abbr className="timestamp" title={timestamp}>
      {moment(timestamp).fromNow()}
    </abbr>
  );
};
