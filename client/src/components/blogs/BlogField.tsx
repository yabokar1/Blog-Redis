import React from "react";
import { WrappedFieldProps } from "redux-form";

interface BlogFieldProps extends WrappedFieldProps {
  label: string;
}

const BlogField: React.FC<BlogFieldProps> = ({
  input,
  label,
  meta: { error, touched },
}) => {
  return (
    <input className={input.name}>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </input>
  );
};

export default BlogField;
