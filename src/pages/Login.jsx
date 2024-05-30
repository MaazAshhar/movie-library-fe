import React from "react";
import image from "../assets/background_image.jpg";
import { Field, Form, Formik } from "formik";
import { loginValidation } from "../auth/LoginValidation";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userServices";
import { doLogin } from "../auth";

const login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values)=>{
    try {
      const res = await loginUser(values);
      if (res.data.success) {
        doLogin(res, () => navigate("/home"));
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
    
  }
  return (
    <div
      className="bg-cover min-h-screen flex justify-center items-center"
      style={{
        background: `url(${image})`,
      }}
    >
      <div className="bg-black bg-opacity-80 flex flex-col rounded-lg w-[30rem] p-8 gap-6">
        <h3 className="text-xl text-white sm:text-3xl">Login</h3>
        {/* form section  */}
        <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginValidation}
            onSubmit={(values) => handleSubmit(values)}>
            {({ errors, touched }) => (
              <Form>
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
                  <div className="text-sm text-red-600 pl-4">
                    {errors.email}
                  </div>
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

                <div className="text-center">
                  <button
                    className="bg-red-600 text-white hover:scale-105 hover:bg-red-500 duration-300 rounded-md px-4 py-2 mt-4"
                    type="submit">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-3">
            <p className="text-sm">
              Not an account?{" "}
              <Link className="text-blue-700 font-medium" to="/signup">
                Create Here
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default login;
