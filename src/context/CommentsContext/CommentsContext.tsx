import { createContext, FC, useEffect, useMemo, useState } from 'react';

import { getCommentsReq, postCommentsReq } from 'services/commentsService';
import { IComment, ICommentPost } from 'types/interfaces';

interface ICommentsContext {
  comments: IComment[];
  getComments: () => void;
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

  const addComment = async (comment: ICommentPost) => {
    setIsLoading(true);
    await postCommentsReq(comment);
    getComments();
  };

  const getComments = async () => {
    setIsLoading(true);
    const res = await getCommentsReq();
    if (!res) {
      console.error('Error while fetching comments');
      setIsLoading(false);
      return;
    }
    setComments(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

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

