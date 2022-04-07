import { FC } from 'react';

import styles from './CommentsListItem.module.scss';

import { IComment } from 'types';

interface Props {
  comment: IComment;
}

export const CommentsListItem: FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <div className={styles.root}>
      <div>
        <div>
          <h4>{name}</h4>

          <p>{email}</p>
        </div>
      </div>

      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};
