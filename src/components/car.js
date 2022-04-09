const Car = (props) => {
  console.log(props.priceDaily);
  return (
    <div className="p-5 max-h-fit space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 grid grid-row-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <img src={props.carImage} className="w-48" alt="car" />
        <div className="flex flex-col items-center divide-y">
          <h1 className="text-2xl">{props.carName}</h1>
          <ul className="list-disc pt-3">
            {props.features.map((item) => (
              <li>{item}</li>
            ))}
            {props.priceDaily !== undefined ? (
              <>
                <li>
                  <p>Daily price: {props.priceDaily}$</p>
                </li>
                <li>
                  <p className="font-bold">Total price: {props.priceTotal}$</p>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={props.action}
          className="max-h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {props.actionName}
        </button>
      </div>
    </div>
  );
};

export default Car;
