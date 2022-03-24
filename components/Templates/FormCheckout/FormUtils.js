import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const initialValues = {
  firstName: "Gonzalo Axel",
  lastName: "Valdez",
  streetAdress1: "Alto Ilo",
  streetAdress2: "Nuevo Ilo",
  country: "Peru",
  region: "Moquegua",
  postcode: "1806",
  phone: "96998945",
  email: "gonzaloaxelh@gmail.com",
  orderNotes: "Tanks for me order",
};
