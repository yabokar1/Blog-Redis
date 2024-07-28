import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../actions";

// Define the types for blog and props
// interface Blog {
//   _id: string;
//   title: string;
//   content: string;
// }

// interface BlogListProps {
//   blogs: Blog[];
//   fetchBlogs: () => void;
// }

const BlogList: React.FC<{}> = () => {
  const blogs = useSelector((state: any) => state.blogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog: any) => (
        <div className="card darken-1 horizontal" key={blog._id}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{blog.title}</span>
              <p>{blog.content}</p>
            </div>
            <div className="card-action">
              <Link to={`/blogs/${blog._id}`}>Read</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
