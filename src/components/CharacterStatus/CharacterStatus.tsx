import classNames from 'classnames';
import styles from './CharacterStatus.module.scss';

interface CharacterStatusProps {
  status: Character['status'],
  species: Character['species']
}


export const CharacterStatus = ({ status, species }: CharacterStatusProps) => {
  return (
    <span>
          <div className={classNames(styles.status_icon, styles[status.toLowerCase()])} />
          <span className={styles.status}>{status} - {species ? species : null}</span>
    </span>
  );
};

