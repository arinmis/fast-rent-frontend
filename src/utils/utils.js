import axios from "axios";

export const multipleExist = (arr, values) => {
  return values.every((value) => {
    return arr.includes(value);
  });
};

export const deAllocateCar = async (id) => {
  return await axios.get(`/deallocate-car/${id}/`);
};
