import CustomModal, { hideModel } from "../components/modal";
import { Formik } from "formik";
import ErrorText from "../components/error_text";
import axios from "axios";

const SingupForm = (props) => {
  const form = (
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
        hideModel();
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
        <form onSubmit={handleSubmit} className="px-6 grid grid-rows gap-6">
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
  );

  return <CustomModal buttonText="Singup" content={form} />;
};

export default SingupForm;

/*
<form className="px-6 grid grid-rows gap-2">

  <div className="mb-2 input-layout">
    <label for="fName">Car Brand</label>
    <input type="text" id="fName" className="form-input" placeholder="Toyota" />
  </div>


  <div class="mb-2 input-layout">
    <label for="phone-number">Upload car photo</label>
    <input type="file" id="file-input" name="ImageStyle" />
  </div>




  <div class="mb-2 input-layout">
    <label for="fName">Car Brand</label>
    <select value="gas" className="w-full">
      <option value="gas">gas</option>
      <option value="diessel">diessel</option>
      <option value="electric">electric</option>
      <option value="hybrit">hybrit</option>
    </select>
  </div>

  <div class="mb-2 input-layout">
    <label for="email">Price per hour</label>
    <input type="number" className="form-input" placeholder="30" />
  </div>

  <div class="mb-2 input-layout">
    <label for="password">Transmission type</label>
    <select value="gas" className="w-full">
      <option value="gas">Automatic</option>
      <option value="diessel">Manual</option>
    </select>
  </div>


</form>;
*/
