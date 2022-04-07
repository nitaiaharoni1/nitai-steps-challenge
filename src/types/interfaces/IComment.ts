export interface ICommentPost {
  'name': string,
  'email': string,
  'body': string
}

export interface IComment extends ICommentPost {
  'postId': number,
  'id': number,
}
