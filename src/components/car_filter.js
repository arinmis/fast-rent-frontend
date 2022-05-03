const CarFilter = () => {
  return (
    <div className="flex justify-center items-center mb-40">
      <div className="divide-y card grid grid-rows gap-10 ">
        <div className="grid grid-rows-2 gap-2 items-center">
          <div className="flex justify-center">
            <h1 className="text-2xl mx-2">Price</h1>
            <input type="number" className="w-24" placeholder="min" />
            <input type="number" className="w-24" placeholder="max" />
          </div>
          <select id="countries">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>

        <div className="grid grid-row-3">
          <h1 className="text-2xl">Fuel Type</h1>
          <div className="grid grid-cols-2">
            <div className="checkbox-layout">
              <label for="checkbox-1">Gas</label>
              <input type="checkbox" />
            </div>
            <div className="checkbox-layout">
              <label for="checkbox-1">Diessel</label>
              <input type="checkbox" />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="checkbox-layout">
              <label for="checkbox-1">Electric</label>
              <input type="checkbox" />
            </div>
            <div className="checkbox-layout">
              <label for="checkbox-1">Hybrit</label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-row-3">
          <h1 className="text-2xl">Car Brand</h1>
          <div className="grid grid-cols-2">
            <div className="checkbox-layout">
              <label for="checkbox-1">Toyota</label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
            <div  className="checkbox-layout">
              <label for="checkbox-1">Tesla</label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="checkbox-layout">
              <label for="checkbox-1">Audi</label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
            <div className="checkbox-layout">
              <label for="checkbox-1">BMW</label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-row-3">
          <h1 className="text-2xl">Transmission Type</h1>
          <div className="grid grid-cols-2">
            <div className="checkbox-layout">
              <label 
              for="checkbox-1">Manual</label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
            <div className="checkbox-layout">
              <label  for="checkbox-1">
                Automatic
              </label>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilter;
