import { capitalize } from 'lodash';
import { FC, useState } from 'react';

import styles from './CommentsListItem.module.scss';

import { IComment } from 'types';

interface Props {
  comment: IComment;
}

export const CommentsListItem: FC<Props> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, email, body } = comment;

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={styles.root}
      onClick={handleIsOpen}
    >
      <div className={styles.title}>
        {capitalize(name)}
      </div>

      {isOpen && (
        <div>
          <div className={styles.textSection}>
            <span className={styles.subtitle}>
              {'Body: '}
            </span>

            <span>
              {body}
            </span>
          </div>

          <div className={styles.textSection}>
            <span className={styles.subtitle}>
              {'Email: '}
            </span>

            <span>
              {email}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
