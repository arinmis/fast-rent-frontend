const CarFilter = () => {
  return (
    <div className="flex justify-center items-center mb-40">
      <div className="divide-y p-5  space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-2 flex items-center">
          <h1 className="text-2xl">Price</h1>
          <input
            type="number"
            id="large-input"
            class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="min"
          />
          <input
            type="number"
            id="large-input"
            class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="max"
          />
        </div>
        <div>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>

        <div className="grid grid-row-3">
          <h1 className="text-2xl">Fuel Type</h1>
          <div className="grid grid-cols-2">
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Gas
              </label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Diessel
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Electric
              </label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Hybrit
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-row-3">
          <h1 className="text-2xl">Car Brand</h1>
          <div className="grid grid-cols-2">
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Toyota
              </label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tesla
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Audi
              </label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                BMW
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-row-3">
          <h1 className="text-2xl">Transmission Type</h1>
          <div className="grid grid-cols-2">
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Manual
              </label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Automatic
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilter;
