import axios from 'axios';

import { constants } from '../constants';

import { IComment, ICommentPost } from 'types/interfaces';

const { base, comments, stepsBase, testAssignComment } = constants.api;

export const getCommentsReq = async (): Promise<IComment[] | undefined> => {
  const res = await axios.get(`${base}/${comments}`);
  if (!res?.data) return undefined;
  return res?.data;
};

export const postCommentsReq = async (comment: ICommentPost): Promise<any> => {
  const res = await axios.post(`${stepsBase}/${testAssignComment}`, comment);
  if (!res?.data) return undefined;
  return res?.data;
};
