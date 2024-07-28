import React, { useState } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import BlogForm from "./BlogForm";
import BlogFormReview from "./BlogFormReview";

// Define types for props and state
interface BlogNewProps {
  // No additional props are needed from reduxForm directly here
}

const BlogNew: React.FC<
  InjectedFormProps<{}, BlogNewProps> & BlogNewProps
> = () => {
  const [showFormReview, setShowFormReview] = useState<boolean>(false);

  const renderContent = () => {
    if (showFormReview) {
      return <BlogFormReview onCancel={() => setShowFormReview(false)} />;
    }

    return <BlogForm onBlogSubmit={() => setShowFormReview(true)} />;
  };

  return <div>{renderContent()}</div>;
};

export default reduxForm({
  form: "blogForm",
})(BlogNew);
