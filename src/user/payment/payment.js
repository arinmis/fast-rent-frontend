const Payment = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="text-center divide-y p-10 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="font-bold text-2xl">Total Price: 60$</h1>
        <div className="grid grid-row">
          <div className="grid grid-cols-2 items-center pt-6">
            <div>
              <label
                for="lName"
                class=" col-span-2 text-lg block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="lName"
                class="w-96 col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Arinmis"
                required=""
              />
            </div>
            <div>
              <label
                for="lName"
                class=" col-span-2 text-lg block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lName"
                class="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Arinmis"
                required=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
