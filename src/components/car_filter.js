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
            <div>
              <input type="checkbox" />
              <label for="checkbox-1">Gas</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="checkbox-1">Diessel</label>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <input type="checkbox" />
              <label for="checkbox-1">Electric</label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
              <label for="checkbox-1">Hybrit</label>
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
              />
              <label for="checkbox-1">Toyota</label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
              <label for="checkbox-1">Tesla</label>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
              <label for="checkbox-1">Audi</label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
              <label for="checkbox-1">BMW</label>
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
              />
              <label for="checkbox-1">Manual</label>
            </div>
            <div>
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
              />
              <label for="checkbox-1">Automatic</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilter;
