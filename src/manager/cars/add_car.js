import CustomModal, { hideModel } from "../../components/modal";
import { Formik } from "formik";
import ErrorText from "../../components/error_text";
import axios from "axios";
import FormData from "form-data";

const AddCar = (props) => {
  const form = (
    <Formik
      initialValues={{
        carBrand: 1,
        fuelType: 1,
        location: 1,
        transmissionType: 1,
        priceDaily: 30,
        photo: null,
      }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        const formData = new FormData();
        formData.append("brand_type", values.carBrand);
        formData.append("fuel_type", values.fuelType);
        formData.append("location", values.location);
        formData.append("transmission_type", values.transmissionType);
        formData.append("daily_price", values.priceDaily);
        formData.append(
          "photo",
          values.photo,
          new Date().getTime() + "-" + values.photo.name
        );
        for (var p of formData) {
          console.log(p);
        }
        try {
          const response = axios.post("/car-crud/", formData, {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            },
          });
          console.log(response);
          console.log("herer");
          hideModel();
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
        setFieldValue,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="px-6 grid grid-rows gap-6">
          <div className="grid grid-cols-2 gap-3">
            <div class="mb-2 input-layout">
              <label for="carBrand">Car Brand</label>
              <select
                name="carBrand"
                id="carBrand"
                className="form-input w-48"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.carBrand}
              >
                <option value="1">Toyota</option>
                <option value="2">Tesla</option>
                <option value="3">Audi</option>
                <option value="4">BMW</option>
              </select>
              <div className="flex justify-end">
                <ErrorText message={errors.carBrand}></ErrorText>
              </div>
            </div>
            <div class="mb-2 input-layout">
              <label for="fuelType">FuelType</label>
              <select
                name="fuelType"
                id="fuelType"
                className="form-input w-48"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fuelType}
              >
                <option value="1">Gas</option>
                <option value="2">Diessel</option>
                <option value="3">Electric</option>
                <option value="4">Hybrit</option>
              </select>
              <div className="flex justify-end">
                <ErrorText message={errors.fuelType}></ErrorText>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-2 input-layout">
              <label for="pickupOffice">Location</label>
              <select
                name="location"
                id="location"
                className="form-input  w-48"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              >
                <option value="1">Antalya</option>
                <option value="2">Tokat</option>
              </select>
              <div className="flex justify-end">
                <ErrorText message={errors.location}></ErrorText>
              </div>
            </div>
            <div class="mb-2 input-layout">
              <label for="transmissionType">Transmission Type</label>
              <select
                name="transmissionType"
                id="transmissionType"
                className="form-input  w-48"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.transmissionType}
              >
                <option value="1">Manual</option>
                <option value="2">Automatic</option>
              </select>
              <div className="flex justify-end">
                <ErrorText message={errors.lastName} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div class="mb-2 input-layout">
              <label for="priceDaily">Price Daily</label>
              <input
                type="number"
                id="priceDaily"
                className="form-input"
                placeholder="30"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.priceDaily}
              />
              <div className="flex justify-end">
                <ErrorText message={errors.priceDaily}></ErrorText>
              </div>
            </div>
            <div class="mb-2 input-layout">
              <label for="photo">Upload car photo</label>
              <input
                type="file"
                id="photo"
                className="form-input"
                onBlur={handleBlur}
                onChange={(event) => {
                  console.log(event.currentTarget.files[0]);
                  setFieldValue("photo", event.currentTarget.files[0]);
                }}
              />
              <div className="flex justify-end">
                <ErrorText message={errors.email}></ErrorText>
              </div>
            </div>
          </div>
          <div className="flex justify-end mb-3">
            <button type="submit" className="btn-primary">
              Add
            </button>
          </div>
        </form>
      )}
    </Formik>
  );

  return <CustomModal buttonText="Add Car" content={form} />;
};

export default AddCar;
