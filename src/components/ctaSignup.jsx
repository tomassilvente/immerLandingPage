"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CtaSignUp = () => {

  // validate form input
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address Required"),
  });

  // sign user function
  const signUpUser = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="pb-20">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => signUpUser(values)}
      >
        <Form className="flex flex-col gap-0">
          <ErrorMessage
            name="email"
            component="div"
            className="text-primary font-semibold text-md mt-2"
          />
          <div className="flex flex-row">
            <Field
              type="email"
              name="email"
              className="p-2 bg-white sm:w-[480px] w-[200px] sm:h-16 h-12 rounded-tl-md rounded-bl-md"
            />
            <button
              type="submit"
              className="bg-primary text-xl font-bold not-italic
             rounded-r-md rounded-br-md text-white px-4 py-2 mr-2 sm:w-[232px] w-[150px] sm:h-16 h-12"
            >
              Signup
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CtaSignUp;
