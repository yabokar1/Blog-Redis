import { ActionType } from "../action-types";

const blogsReducer = function (state = {}, action: any) {
  switch (action.type) {
    case ActionType.FETCH_BLOG:
      const blog = action.payload;
      return { ...state, [blog._id]: blog };
    case ActionType.FETCH_BLOGS:
      const blogs = action.payload;
      const blogsById = blogs.reduce((acc: any, blog: any) => {
        acc[blog._id] = blog;
        return acc;
      }, {});
      return { ...state, ...blogsById };
    default:
      return state;
  }
};

export default blogsReducer;
