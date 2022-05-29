import axios from "axios";

export const multipleExist = (arr, values) => {
  return values.every((value) => {
    return arr.includes(value);
  });
};

export const deAllocateCar = async (id) => {
  return await axios.get(`/deallocate-car/${id}/`);
};

// arrays element has tove object
// and needs id property
export const removeWithId = (array, id) => {
  let index = -1;
  array.forEach((item, i) => {
    console.log(item.id, id);
    if (item.id === id) {
      index = i;
      return;
    }
  });
  console.log(index);
  array.splice(index, 1);
  console.log(array.splice(index, 1));
  return array;
};
