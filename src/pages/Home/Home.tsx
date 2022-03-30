import Day from '../../components/Day';
import Dud from '../../components/Dud';
import Temparature from '../../components/Temparature';
import Time from '../../components/Time';
import TimeInMinutes from '../../components/TimeInMinutes';
import WalkedFor from '../../components/WalkedFor';
import styles from './style.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <WalkedFor />
      <Temparature />
      <Time />
      <TimeInMinutes />
      <Day />
      <Dud />
    </div>
  );
};

export default Home;
