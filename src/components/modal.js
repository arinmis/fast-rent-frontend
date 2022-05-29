import Modal from "flowbite/src/components/modal";

export const showModel = () => {
  const targetEl = document.getElementById("model");
  const Model = new Modal(targetEl);
  Model.show();
};

export const hideModel = () => {
  const targetEl = document.getElementById("model");
  const Model = new Modal(targetEl);
  Model.hide();
  document.querySelector("[modal-backdrop]").remove(); // kill background
};

const CustomModal = ({ buttonText, content }) => {
  const handle = (e) => {
    e.preventDefault();
    hideModel();
  };

  return (
    <>
      <div class="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
        <button className="btn-primary" type="submit" onClick={showModel}>
          {buttonText}
        </button>
      </div>
      <div
        id="model"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div class="relative p-4  h-full sm:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-end p-2">
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black"
                onClick={hideModel}
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
            {content}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomModal;
