import styles from './style.module.css';

const Card: React.FC = ({ children }) => {
  return (
    <article className={`${styles.Card} Card`}>
      <section>{children}</section>
    </article>
  );
};

export default Card;
