import axios from "axios";

export const multipleExist = (arr, values) => {
  return values.every((value) => {
    return arr.includes(value);
  });
};

export const deAllocateCar = async (id) => {
  return await axios.get(`/deallocate-car/${id}/`);
};

// arrays element has to has object
// and needs id property
export const removeWithId = (originalArray, id) => {
  const array = [...originalArray]; // don't mutate original array
  let index = -1;
  array.forEach((item, i) => {
    console.log(item.id, id);
    if (item.id === id) {
      index = i;
      return;
    }
  });
  console.log("car removed", array.splice(index, 1));
  return array;
};
