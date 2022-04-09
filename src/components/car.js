const Car = (props) => {
  console.log(props);
  console.log(props.actionName);
  return (
    <div
      className={
        (props.cardColor ? props.cardColor : "bg-white") +
        " p-5 max-h-fit space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 grid grid-row-2"
      }
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <img src={props.carImage} className="w-48" alt="car" />
        <div className="flex flex-col items-center divide-y">
          <h1 className="text-2xl">{props.carName}</h1>
          <ul className="list-disc pt-3">
            {props.features.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {props.actionName !== undefined ? (
        <div className="flex justify-end">
          <button
            onClick={props.action}
            className="max-h-12 text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800"
          >
            {props.actionName}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Car;
