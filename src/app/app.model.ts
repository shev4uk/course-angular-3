export enum StatePost {
  'draft' = 0,
  'pending' = 1,
  'publish' = 2
}

export type Post = {
  id: number,
  title: string,
  text: string,
  author: string,
  status: StatePost
}
