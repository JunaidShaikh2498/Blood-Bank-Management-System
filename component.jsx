import React from "react";

const component = () => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState(location.state.user);
  
  const [add,setAdd] = useState(userInfo.address)
  const [contact,setContact] = useState(userInfo.contact)

  const updateInfo = (e) => {
    e.preventDefault();
    const options={
        Donor_Id : userInfo.uid,
        Donor_Name : userInfo.name,
        Blood_Group_Id : userInfo.bg,
        Donor_Address : add,
        Donor_Contact : contact,
        Patient_Id : userInfo.uid,
        Patient_Name : userInfo.name,
        Blood_Group_Id : userInfo.bg,
        Patient_Address : add,
        Patient_Contact : contact
    }
    fetch("http://localhost:9000/updateUser",options)
    .then((response)=>{return response.json()})
    .then((data)=>{console.log(data);})
  };

  return (
    <div>
      <form>
        <div class="mb-3 row">
          <label for="staticId" class="col-sm-2 col-form-label">
            User ID
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              disabled
              value={userInfo.uid}
              class="form-control"
              id="staticId"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              disabled
              value={userInfo.name}
              class="form-control"
              style={{ width: "400px" }}
              id="staticName"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputAddress" class="col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              value={add}
              class="form-control"
              style={{ width: "400px" }}
              id="inputAddress"
              onChange={(e)=>{
                setAdd(e.target.value)
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputContact" class="col-sm-2 col-form-label">
            Contact no
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control-plaintext"
              value={contact}
              style={{ width: "400px" }}
              id="inputContact"
              onChange={(e) => {
                setContact(e.target.value)
              }}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputBg" class="col-sm-2 col-form-label">
            Blood Group
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              value={userInfo.bg}
              id="inputBg"
              disabled
            />
          </div>
        </div>
        {/* <div class="mb-3 row">
      <label for="inputBB" class="col-sm-2 col-form-label">
        Blood Bank
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          value={""}
          style={{ width: "400px" }}
          id="inputBB"
          disabled
        />
      </div>
    </div> */}
        <div class="mb-3 row">
          <div class="col-sm-10">
            <button
              className="btn btn-outline-primary"
              style={{ width: "200px" }}
              onClick={(e) => {
                updateInfo(e);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default component;
