import { FC, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { CommentsAddComment } from '../CommentsAddComment/CommentsAddComment';
import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

import { LoadMore } from 'components';
import { CommentsContext } from 'context';

export const CommentsList: FC = () => {
  const { comments, isLoading, getComments } = useContext(CommentsContext);

  const handleScroll = async () => {
    if (isLoading) return;
    const page = comments.length / 20;
    await getComments(page);
  };

  return (
    <div style={{ height: '80%' }}>
      <CommentsAddComment />

      <InfiniteScroll
        hasMore={!isLoading}
        loader={<LoadMore isLoading={isLoading} />}
        loadMore={handleScroll}
        threshold={0}
      >
        {comments.map((comment) => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
