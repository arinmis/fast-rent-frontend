import Modal from "flowbite/src/components/modal";

const SingupForm = (props) => {
  const showSingupModel = () => {
    const targetEl = document.getElementById("singupModel");
    const singupModel = new Modal(targetEl);
    console.log("singupModel");
    singupModel.show();
  };
  const hideSingupModel = () => {
    const targetEl = document.getElementById("singupModel");
    const singupModel = new Modal(targetEl);
    console.log("singupModel");
    singupModel.hide();
    document.querySelector("[modal-backdrop]").remove(); // kill background
  };

  const handleSingup = (e) => {
    e.preventDefault();
    hideSingupModel();
  };

  return (
    <>
      <div class="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
        <button
          class="block text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800"
          type="submit"
          onClick={showSingupModel}
        >
          Signup
        </button>
      </div>
      <div
        id="singupModel"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-end p-2">
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black"
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
                  data-modal-toggle="signupModal"
                  onClick={handleSingup}
                  class="text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800"
                >
                  Singup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingupForm;
