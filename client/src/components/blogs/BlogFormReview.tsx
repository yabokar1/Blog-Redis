// types.ts

import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import formFields, { FormField } from "./FormFields";
import { useNavigate } from "react-router-dom";
import { submitBlog } from "../../actions";

export interface BlogFormReviewProps {
  onCancel: () => void;
}

const BlogFormReview: React.FC<BlogFormReviewProps> = ({ onCancel }) => {
  const formValues = useSelector((state: any) => state.form.blogForm.values);

  const navigate = useNavigate();

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitBlog(formValues, navigate);
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <h5>Please confirm your entries</h5>
      {formFields.map(({ name, label }: FormField) => (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      ))}
      <div>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    </form>
  );
};

export default BlogFormReview;
