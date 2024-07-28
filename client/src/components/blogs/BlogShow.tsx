import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../../actions";
import { RootState } from "../../reducers"; // Adjust path as needed

// Define the type for the component's props

const BlogShow: React.FC<{}> = () => {
  const { _id } = useParams<string>();
  const dispatch = useDispatch();

  // Selector to get the blog from the Redux store
  const blog = useSelector((state: RootState) => state.blogs[_id!] || null);

  // Fetch blog data when component mounts
  useEffect(() => {
    fetchBlog(_id);
  }, [_id, dispatch]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { title, content } = blog;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlogShow;
