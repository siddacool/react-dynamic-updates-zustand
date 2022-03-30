import { useTime } from '../../store';
import Card from '../Card';
import styles from './style.module.css';

const Time = () => {
  const timeInSeconds = useTime((state) => state.timeInSeconds);

  return (
    <section className={styles.Time}>
      <Card>Time: {timeInSeconds}</Card>
    </section>
  );
};

export default Time;
