import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { CommentsAddComment } from '../CommentsAddComment/CommentsAddComment';
import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

import { LoadMore } from 'components';
import { IComment } from 'types';

interface Props {
  comments: IComment[];
}

export const CommentsList: FC<Props> = ({ comments }) => {
  const handleScroll = () => {
    console.error('scrolled');
  };

  const first10Comments = comments.slice(0, 10);

  return (
    <div>
      <CommentsAddComment />

      <InfiniteScroll
        hasMore
        loader={<LoadMore />}
        loadMore={handleScroll}
        pageStart={0}
      >
        {first10Comments.map((comment) => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
