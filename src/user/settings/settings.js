const Settings = () => {
  return (
    <div className="my-5 sm:my-10  grid grid-cols justify-center items-center ">
      <form className="p-6 card grid gap-3 grid-cols-2">
        <div class="mb-2 input-layout">
          <label for="fName">First Name</label>
          <input
            type="text"
            id="fName"
            placeholder="Mustafa"
            value="Mustafa"
            required=""
          />
        </div>
        <div class="mb-2 input-layout">
          <label for="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            placeholder="Arinmis"
            value="Arinmis"
            required=""
          />
        </div>
        <div class="mb-2 input-layout">
          <label for="ID">ID</label>
          <input
            type="text"
            id="ID"
            placeholder="Arinmis"
            value="11111111111"
            required=""
          />
        </div>
        <div class="mb-2 input-layout">
          <label for="phone-number">Phone Number</label>
          <input
            type="tel"
            id="phone-number"
            placeholder="+90 543 535 95 24"
            value="+90 543 549 99 53"
            required=""
          />
        </div>
        <div class="mb-2 input-layout">
          <label for="email">email</label>
          <input
            type="email"
            id="email"
            placeholder="name@flowbite.com"
            value="name@flowbite.com"
            required=""
          />
        </div>
        <div class="mb-2 input-layout">
          <label for="password">password</label>
          <input type="password" id="password" required="" />
        </div>
      </form>
      <div className="flex justify-end mt-5">
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="btn-primary"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Settings;
