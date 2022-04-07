import axios from 'axios';

import { constants } from '../constants';

import { IComment } from 'types/interfaces';

const { base, comments } = constants.api;

export const getCommentsReq = async (): Promise<IComment[] | undefined> => {
  const res = await axios.get(`${base}/${comments}`, {});
  if (!res?.data) return undefined;
  return res?.data;
};

