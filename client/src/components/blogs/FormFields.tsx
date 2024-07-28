export type FormField = { label: string; name: string };
export type FormFieldArray = FormField[];

export default [
  { label: "Blog Title", name: "title" },
  { label: "Content", name: "content" },
] as FormFieldArray;
