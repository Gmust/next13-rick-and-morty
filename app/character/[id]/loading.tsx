import styles from './skeleton.module.scss';

const Loading = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonPhotoAndName}>
        <div className={styles.skeletonName}></div>
        <div className={styles.skeletonImage}></div>
      </div>
      <div className={styles.skeletonInfo}>
        <div className={styles.skeletonInfo}></div>
      </div>
    </div>
  );
};

export default Loading;