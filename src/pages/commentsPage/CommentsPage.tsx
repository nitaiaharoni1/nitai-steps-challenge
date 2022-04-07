import { FC, useContext } from 'react';

import styles from './CommentsPage.module.scss';
import { CommentsList } from './components';

import { CommentsContext } from 'context';

export const CommentsPage: FC = () => {
  const { comments } = useContext(CommentsContext);

  return (
    <>
      <div className={styles.header}>Comments</div>

      <CommentsList comments={comments} />
    </>
  );
};
