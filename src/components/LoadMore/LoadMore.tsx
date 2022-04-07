import { CircularProgress } from '@mui/material';
import { FC } from 'react';

import styles from './LoadMore.module.scss';

interface Props {
  isLoading?: boolean;
}

export const LoadMore: FC<Props> = ({ isLoading }) => (
  <div className={styles.root}>
    <div className={styles.loadMore}>
      Load more...
      {isLoading && (
        <CircularProgress
          className={styles.circularProgress}
          color='inherit'
          size={20}
        />
      )}
    </div>
  </div>
);
