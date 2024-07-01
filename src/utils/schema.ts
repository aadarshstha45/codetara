import * as yup from "yup";

export const ApplicationSchema = yup.object().shape({
  jobId: yup.string(),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  github: yup.string().required("Github link is required"),
  file: yup.mixed().required("Resume is required"),
});
