import { Field, Form, Formik } from "formik";
import React from "react";
import { signUpValidation } from "../auth/SignupValidation";
import image from "../assets/background_image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/userServices";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const res = await registerUser(values);
      if (res.data.success) {
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div
      className="bg-cover min-h-screen flex justify-center items-center"
      style={{
        background: `url(${image})`,
      }}
    >
      <div className="bg-black bg-opacity-70 flex flex-col rounded-lg w-[30rem] p-8 gap-6">
        <h3 className="text-xl text-white sm:text-3xl">Sign Up</h3>
        {/* form section  */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            phone: "",
          }}
          validationSchema={signUpValidation}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <label className="pl-2" htmlFor="name">
                Name
              </label>
              <Field
                className="w-full py-4 px-4 text-white rounded-md text-sm sm:text-base border border-gray-400 mb-2 bg-inherit"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
              />
              {errors.name && touched.name ? (
                <div className="text-sm text-red-600 pl-4">{errors.name}</div>
              ) : null}
              <label className="pl-2" htmlFor="email">
                Email
              </label>
              <Field
                className="w-full py-4 px-4 text-white rounded-md text-sm sm:text-base border border-gray-400 mb-2 bg-inherit"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
              />
              {errors.email && touched.email ? (
                <div className="text-sm text-red-600 pl-4">{errors.email}</div>
              ) : null}
              <label className="pl-2" htmlFor="password">
                Password
              </label>
              <Field
                className="w-full py-4 px-4 text-white rounded-md text-sm sm:text-base border border-gray-400 mb-2 bg-inherit"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              {errors.password && touched.password ? (
                <div className="text-sm text-red-600 pl-4">
                  {errors.password}
                </div>
              ) : null}
              <label className="pl-2" htmlFor="phone">
                Phone
              </label>
              <Field
                className="w-full py-4 px-4 text-white rounded-md text-sm sm:text-base border border-gray-400 mb-2 bg-inherit"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Phone no"
              />
              {errors.phone && touched.phone ? (
                <div className="text-sm text-red-600 pl-4">{errors.phone}</div>
              ) : null}

              <div className="text-center">
                <button
                  className="bg-red-600 text-white hover:scale-105 hover:bg-red-500 duration-300 rounded-md px-4 py-2 mt-4"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-3">
          <p className="text-sm">
            Already an account{" "}
            <Link className="text-blue-700 font-medium" to="/">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
