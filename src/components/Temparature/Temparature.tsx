import { useTemparature } from '../../store';
import Card from '../Card';
import styles from './style.module.css';

const Temparature = () => {
  const data = useTemparature((state) => state.data);

  return (
    <section className={styles.Temparature}>
      <Card>Temparature :{data}°</Card>
    </section>
  );
};

export default Temparature;
