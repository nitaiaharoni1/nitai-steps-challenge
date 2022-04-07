import { Button } from '@mui/material';
import { FC } from 'react';

import styles from './LoadMore.module.scss';

export const LoadMore: FC = () => (
  <div className={styles.root}>
    <div className={styles.loadMore}>
      Load more...
    </div>
  </div>
);
