import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { CommentsAddComment } from '../CommentsAddComment/CommentsAddComment';
import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

import { Loader } from 'components';
import { IComment } from 'types';

interface Props {
  comments: IComment[];
}

export const CommentsList: FC<Props> = ({ comments }) => {
  const handleScroll = () => {
    console.error('scrolled');
  };

  const first20Comments = comments.slice(0, 20);

  return (
    <div>
      <CommentsAddComment />

      <InfiniteScroll
        hasMore
        loader={<Loader />}
        loadMore={handleScroll}
        pageStart={0}
      >
        {first20Comments.map((comment) => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
