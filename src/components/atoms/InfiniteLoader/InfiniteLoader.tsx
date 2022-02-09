import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';
import './style.scss';

export const InfiniteLoader: FC = () => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`lds-ellipsis`}>
      <div className={`lds-ellipsis-div ${darkTheme && 'dark'}`}></div>
      <div className={`lds-ellipsis-div ${darkTheme && 'dark'}`}></div>
      <div className={`lds-ellipsis-div ${darkTheme && 'dark'}`}></div>
      <div className={`lds-ellipsis-div ${darkTheme && 'dark'}`}></div>
    </div>
  );
};
