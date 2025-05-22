import * as yup from "yup";

export const billingAddressSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  addressLine: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal Code is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches("^d+$"),
});
