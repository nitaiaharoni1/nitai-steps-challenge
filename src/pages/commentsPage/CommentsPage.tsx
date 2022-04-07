import { FC } from 'react';

import styles from './CommentsPage.module.scss';
import { CommentsList } from './components';

export const CommentsPage: FC = () => (
  <>
    <div className={styles.header}>Comments</div>

    <CommentsList />
  </>
);
