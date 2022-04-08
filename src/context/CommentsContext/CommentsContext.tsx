import { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';

import { GET_COMMENTS_LIMIT } from 'context/CommentsContext/constants';
import { getCommentsReq, postCommentsReq } from 'services/commentsService';
import { IComment, ICommentPost } from 'types/interfaces';

interface ICommentsContext {
  comments: IComment[];
  getComments: (page?: number, limit?: number) => void;
  addComment: (comment: ICommentPost) => void;
  isLoading: boolean;
}

export const CommentsContext = createContext<ICommentsContext>({
  comments: [],
  getComments: () => undefined,
  addComment: () => undefined,
  isLoading: false,
});

export const CommentsProvider: FC = ({ children }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addComment = useCallback((async (comment: ICommentPost) => {
    setIsLoading(true);
    await postCommentsReq(comment);
    getComments();
  }), []);

  const getComments = async (page = 0, limit = GET_COMMENTS_LIMIT) => {
    setIsLoading(true);
    const res = await getCommentsReq(page, limit);
    if (!res) {
      console.error('Error while fetching comments');
      setIsLoading(false);
      return;
    }
    setComments(res);
    setIsLoading(false);
  };

  const value = useMemo(() => ({
    comments,
    getComments,
    addComment,
    isLoading,
  }), [addComment, comments, isLoading]);

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};

