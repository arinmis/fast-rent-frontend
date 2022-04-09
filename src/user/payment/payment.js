const Payment = () => {
  return (
    <div className="flex justify-center items-center  mb-10 sm:mb-40 mx-5">
      <div className="text-center divide-y p-10 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="font-bold text-2xl">Total Price: 60$</h1>
        <div className="grid grid-row">
          <div className="flex justify-between items-center pt-6">
            <label
              for="name"
              class=" col-span2 text-base block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name Surname
            </label>
            <input
              type="text"
              id="lName"
              class="w-full col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="Mustafa Arinmis"
              required=""
            />
          </div>
          <div className="flex justify-between items-center pt-6">
            <label
              for="carNumber"
              class=" col-span2 text-base block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Card Number
            </label>
            <input
              type="text"
              id="carNumber"
              class="w-full col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="5555 5555 5555 4444"
              required=""
            />
          </div>
          <div className="flex justify-between items-center pt-6">
            <label
              for="carNumber"
              class=" col-span2 text-base block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Expire Date
            </label>
            <input
              type="text"
              id="carNumber"
              class="w-full col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="11/29"
              required=""
            />
          </div>
          <div className="flex justify-start items-center pt-6">
            <label
              for="carNumber"
              class=" col-span2 text-base block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              CVV
            </label>
            <input
              type="text"
              id="carNumber"
              class="w-24 ml-8 col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="11/29"
              required=""
            />
          </div>
          <div className="flex justify-end">
            <button className="max-h-12 text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
