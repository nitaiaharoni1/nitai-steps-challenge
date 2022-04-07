import { FC, useContext } from 'react';

import { CommentsList } from 'components';
import { CommentsContext } from 'context';

export const CommentsPage: FC = () => {
  const { comments } = useContext(CommentsContext);

  return (
    <div>
      <CommentsList comments={comments} />
    </div>
  );
};
