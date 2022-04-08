import { FC, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { CommentsAddComment } from '../CommentsAddComment/CommentsAddComment';
import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

import { LoadMore } from 'components';
import { CommentsContext } from 'context';

export const CommentsList: FC = () => {
  const { comments, isLoading, getComments } = useContext(CommentsContext);

  const handleScroll = async (page: number) => {
    debugger;
    console.log(page - 1);
    if (!isLoading) {
      await getComments(page - 1);
    }
  };

  return (
    <div>
      <CommentsAddComment />

      <InfiniteScroll
        hasMore={!isLoading}
        loader={<LoadMore isLoading={isLoading} />}
        loadMore={handleScroll}
      >
        {comments.map((comment) => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
