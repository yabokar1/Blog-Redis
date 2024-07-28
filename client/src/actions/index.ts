import axios from "axios";
import { ActionType } from "../action-types";
import { FetchBlogAction, FetchBlogsAction, FetchUserAction } from "./types";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
export const fetchUser = () => async (dispatch: Dispatch<FetchUserAction>) => {
  const res = await axios.get("/auth/current_user");
  console.log(ActionType.FETCH_USER);
  dispatch({ type: ActionType.FETCH_USER, payload: res.data });
};

export const handleToken =
  (token: any) => async (dispatch: Dispatch<FetchUserAction>) => {
    const res = await axios.post("/auth/stripe", token);

    dispatch({ type: ActionType.FETCH_USER, payload: res.data });
  };

export const submitBlog =
  (values: any, navigate: NavigateFunction) =>
  async (dispatch: Dispatch<FetchBlogAction>) => {
    const res = await axios.post("/blogs", values);

    navigate("/blogs");
    dispatch({ type: ActionType.FETCH_BLOG, payload: res.data });
  };

export const fetchBlogs =
  () => async (dispatch: Dispatch<FetchBlogsAction>) => {
    const res = await axios.get("/blogs");

    dispatch({ type: ActionType.FETCH_BLOGS, payload: res.data });
  };

export const fetchBlog =
  (id: any) => async (dispatch: Dispatch<FetchBlogAction>) => {
    const res = await axios.get(`/blogs/${id}`);

    dispatch({ type: ActionType.FETCH_BLOG, payload: res.data });
  };
