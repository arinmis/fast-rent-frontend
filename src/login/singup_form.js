import Modal from "flowbite/src/components/modal";
import { Formik } from "formik";
import ErrorText from "../components/error_text";
import axios from "axios";

const SingupForm = (props) => {
  const showSingupModel = () => {
    const targetEl = document.getElementById("singupModel");
    const singupModel = new Modal(targetEl);
    singupModel.show();
  };

  const hideSingupModel = () => {
    const targetEl = document.getElementById("singupModel");
    const singupModel = new Modal(targetEl);
    singupModel.hide();
    document.querySelector("[modal-backdrop]").remove(); // kill background
  };

  const handleSingup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div class="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
        <button className="btn-primary" type="submit" onClick={showSingupModel}>
          Signup
        </button>
      </div>
      <div
        id="singupModel"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div class="relative p-4  h-full sm:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black"
                onClick={hideSingupModel}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                citizenID: "",
              }}
              validate={(values) => {
                const errors = {};
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                console.log("herer");
                const response = await axios.post("/create-customer/", {
                  citizen_id: values.citizenID,
                  user: {
                    username: values.username,
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    password: values.password,
                  },
                });
                console.log(response);
                hideSingupModel();
                try {
                } catch {
                  alert("Something went wrong");
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="px-6 grid grid-rows gap-6"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div class="mb-2 input-layout">
                      <label for="phone-number">User Name</label>
                      <input
                        type="text"
                        id="username"
                        className="form-input"
                        placeholder="arinmis"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                      <div className="flex justify-end">
                        <ErrorText message={errors.username}></ErrorText>
                      </div>
                    </div>
                    <div class="mb-2 input-layout">
                      <label for="ID">ID</label>
                      <input
                        type="text"
                        id="citizenID"
                        className="form-input"
                        placeholder="11111111111"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.citizenID}
                      />
                      <div className="flex justify-end">
                        <ErrorText message={errors.citizenID}></ErrorText>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="mb-2 input-layout">
                      <label for="fName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-input"
                        placeholder="Mustafa"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <div className="flex justify-end">
                        <ErrorText message={errors.firstName}></ErrorText>
                      </div>
                    </div>
                    <div class="mb-2 input-layout">
                      <label for="lName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-input"
                        placeholder="Arinmis"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      <div className="flex justify-end">
                        <ErrorText message={errors.lastName}></ErrorText>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div class="mb-2 input-layout">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="mustafa_arinmis@outlook.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <div className="flex justify-end">
                        <ErrorText message={errors.password}></ErrorText>
                      </div>
                    </div>
                    <div class="mb-2 input-layout">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="********"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <div className="flex justify-end">
                        <ErrorText message={errors.email}></ErrorText>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mb-3">
                    <button
                      data-modal-toggle="signupModal"
                      type="submit"
                      className="btn-primary"
                    >
                      Singup
                    </button>
                  </div>
                </form>
              )}
            </Formik>
            {/*
             */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SingupForm;
