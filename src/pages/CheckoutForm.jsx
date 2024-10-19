import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CheckoutForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 ">
        <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-6">
          Login
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // Handle form submission
              console.log(values);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-700 text-white py-2 px-4 rounded-xl hover:bg-white hover:border-2 hover:border-orange-700 hover:text-orange-700 transition duration-150 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-4 text-center">
          <a href="#" className="text-orange-700 hover:underline">
            Forgot your password?
          </a>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-black hover:underline">
            Don't have an account?{" "}
            <span className="text-orange-700 underline">Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
