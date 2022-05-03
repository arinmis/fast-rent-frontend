const Settings = () => {
  return (
    <div className="my-5 sm:my-10  flex flex-col justify-center items-center ">
      <div className="divide-y px-5 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form className="p-6 grid-cols-2">
          <div class="mb-2">
            <label
              for="fName"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="fName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="Mustafa"
              value="Mustafa"
              required=""
            />
          </div>
          <div class="mb-2">
            <label
              for="lName"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="Arinmis"
              value="Arinmis"
              required=""
            />
          </div>
          <div class="mb-2">
            <label
              for="ID"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ID
            </label>
            <input
              type="text"
              id="ID"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="Arinmis"
              value="11111111111"
              required=""
            />
          </div>
          <div class="mb-2">
            <label
              for="phone-number"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="+90 543 535 95 24"
              value="+90 543 549 99 53"
              required=""
            />
          </div>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="name@flowbite.com"
              value="name@flowbite.com"
              required=""
            />
          </div>
          <div class="mb-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              required=""
            />
          </div>
          <div class="mb-2">
            <label
              for="password-confirm"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              password confirm
            </label>
            <input
              type="password"
              id="password-confirm"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-sky-500 dark:focus:border-sky-500"
              required=""
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            className="btn-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
