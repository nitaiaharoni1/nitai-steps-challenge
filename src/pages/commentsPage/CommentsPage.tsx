import { FC, useContext } from 'react';

import styles from './CommentsPage.module.scss';
import { CommentsList } from './components';

import { Loader } from 'components';
import { CommentsContext } from 'context';

export const CommentsPage: FC = () => {
  const { comments } = useContext(CommentsContext);

  return (
    <>
      <div className={styles.header}>Comments Page</div>

      <CommentsList comments={comments} />
    </>
  );
};
