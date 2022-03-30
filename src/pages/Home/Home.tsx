import { lazy, Suspense } from 'react';
import Day from '../../components/Day';
import Temparature from '../../components/Temparature';
import Time from '../../components/Time';
import TimeInMinutes from '../../components/TimeInMinutes';
import WalkedFor from '../../components/WalkedFor';
import styles from './style.module.css';

const Dud = lazy(() => import('../../components/Dud'));

const Home = () => {
  return (
    <div className={styles.Home}>
      <WalkedFor />
      <Temparature />
      <Time />
      <TimeInMinutes />
      <Day />
      <Suspense fallback={<div>Loading...</div>}>
        <Dud />
      </Suspense>
    </div>
  );
};

export default Home;
