import { useWalkedFor } from '../../store';
import Card from '../Card';
import styles from './style.module.css';

const WalkedFor = () => {
  const data = useWalkedFor((state) => state.data);

  return (
    <section className={styles.WalkedFor}>
      <Card>WalkedFor :{data}</Card>
    </section>
  );
};

export default WalkedFor;
