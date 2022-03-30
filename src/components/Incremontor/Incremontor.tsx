import { useEffect } from 'react';
import { useTemparature, useWalkedFor, useTime } from '../../store';

const Incremontor = () => {
  const generateTemparature = useTemparature((state) => state.generate);
  const generateWalkedFor = useWalkedFor((state) => state.generate);
  const generateUseTime = useTime((state) => state.generate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateTemparature();
      generateUseTime();
    }, 100);

    const intervalId2 = setInterval(() => {
      generateWalkedFor();
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
      return;
    };
  }, []);

  return <></>;
};

export default Incremontor;
