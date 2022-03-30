import { useTime } from '../../store';
import Card from '../Card';
import styles from './style.module.css';

const out = Array.from(Array(2000), (_, x) => x);

const ActiveCard = () => {
  const timeInSeconds = useTime((state) => state.timeInSeconds);

  return <Card>{timeInSeconds}</Card>;
};

const Day = () => {
  const timeInSeconds = useTime((state) => state.timeInSeconds);

  return (
    <section className={styles.Dud}>
      <ActiveCard />
      {out.map((o) => (
        <Card key={o}>
          {o} {timeInSeconds}
        </Card>
      ))}
    </section>
  );
};

export default Day;
