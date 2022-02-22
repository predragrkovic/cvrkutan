import {PUSHER_APP_KEY} from 'constants/keys';
import Pusher from 'pusher-js';
import {useEffect, useState} from 'react';

export const usePusher = (channelName: string, eventName: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_APP_KEY, {
      cluster: 'eu',
    });

    const channel = pusher.subscribe(channelName);
    channel.bind(eventName, (incomingData: any) => {
      console.log(incomingData);
      setData((previousData: any[]) => [...previousData, incomingData]);
    });
  }, []);

  return data;
};
