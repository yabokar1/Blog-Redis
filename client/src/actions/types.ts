import { ActionType } from "../action-types";

export interface FetchUserAction {
  type: ActionType.FETCH_USER;
  payload: boolean | null;
}

export interface FetchBlogAction {
  type: ActionType.FETCH_BLOG;
  payload: string;
}

export interface FetchBlogsAction {
  type: ActionType.FETCH_BLOGS;
  payload: string[];
}
