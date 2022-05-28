const Car = (props) => {
  return (
    <div className="grid">
      <div>
        <div className={"card  w-full " + props.cardColor}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex  content-center">
              <img src={props.carImage} className="" alt="car" />
            </div>
            <div className="flex flex-col items-center divide-y">
              <h1 className="text-2xl">{props.carName}</h1>
              <ul className="list-disc pt-3">
                {props.features.map((item, index) => (
                  <li key={props.id + "-" + index}>{item}</li>
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
