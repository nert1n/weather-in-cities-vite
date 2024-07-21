import styles from "./LoaderCircle.module.scss";

const LoaderCircle = () => {
  return (
    <div className={styles.loader__holder}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoaderCircle;
