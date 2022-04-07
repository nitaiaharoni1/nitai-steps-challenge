import { FC, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { CommentsAddComment } from '../CommentsAddComment/CommentsAddComment';
import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

import { LoadMore } from 'components';
import { CommentsContext } from 'context';

export const CommentsList: FC = () => {
  const { comments, isLoading } = useContext(CommentsContext);

  const handleScroll = () => {
    console.error('scrolled');
  };

  const first10Comments = comments.slice(0, 10);

  return (
    <div>
      <CommentsAddComment />

      <InfiniteScroll
        hasMore
        loader={<LoadMore isLoading={isLoading} />}
        loadMore={handleScroll}
      >
        {first10Comments.map((comment) => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
