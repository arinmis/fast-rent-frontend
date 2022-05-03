const Car = (props) => {
  console.log(props);
  console.log(props.actionName);
  return (
    <div className="grid">
      <div>
        <div
          className={
            "card  w-full " + (props.cardColor ? props.cardColor : "bg-white")
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
        </div>
      </div>
      <div className="mt-5 flex justify-end">{props.actions}</div>
    </div>
  );
};

export default Car;
