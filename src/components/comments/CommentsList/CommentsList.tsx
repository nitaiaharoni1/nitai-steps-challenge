import { FC } from 'react';

import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

import styles from './CommentsList.module.scss';

import { IComment } from 'types';

interface Props {
  comments: IComment[];
}

export const CommentsList: FC<Props> = ({ comments }) => (
  <div className={styles.root}>
    {comments.map((comment) => (
      <CommentsListItem key={comment.id} comment={comment} />
    ))}
  </div>
);
