import { FC } from 'react';

import { CommentsPage } from './CommentsPage';

import { CommentsProvider } from 'context';

export const CommentsPageWrapper: FC = () => (
  <CommentsProvider>
    <CommentsPage />
  </CommentsProvider>
);
