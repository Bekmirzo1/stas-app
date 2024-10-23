export type reactVal = 0 | 1;
export type likeOrDislike = "like" | "dislike";
export interface ReactionObj {
  class: likeOrDislike;
  value: string;
}