import { useTime } from '../../store';
import Card from '../Card';
import styles from './style.module.css';

const TimeInMinutes = () => {
  const timeInMinutes = useTime((state) => state.timeInMinutes);

  return (
    <section className={styles.Time}>
      <Card>TimeInMinutes: {timeInMinutes}</Card>
    </section>
  );
};

export default TimeInMinutes;
