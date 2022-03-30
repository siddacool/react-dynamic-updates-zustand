import { useTime } from '../../store';
import Card from '../Card';
import styles from './style.module.css';

const Day = () => {
  const day = useTime((state) => state.day);

  return (
    <section className={styles.Time}>
      <Card>Day: {day}</Card>
    </section>
  );
};

export default Day;
