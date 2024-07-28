import React from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Link } from "react-router-dom";
import BlogField from "./BlogField";
import formFields, { FormField } from "./FormFields";

// Define the type for form values
interface BlogFormValues {
  [key: string]: string;
}

interface BlogFormProps {
  onBlogSubmit: () => void;
}

const BlogForm: React.FC<
  InjectedFormProps<BlogFormValues, BlogFormProps> & BlogFormProps
> = ({ handleSubmit, onBlogSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onBlogSubmit)}>
        {formFields.map(({ label, name }: FormField) => (
          <Field
            key={name}
            component={BlogField}
            type="text"
            label={label}
            name={name}
          />
        ))}
        <Link to="/blogs" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values: { [key: string]: string }) {
  const errors: { [key: string]: string } = {};
  formFields.forEach((_, name) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm<BlogFormValues, BlogFormProps>({
  validate,
  form: "blogForm",
  destroyOnUnmount: false,
})(BlogForm);
