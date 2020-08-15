import React, { useState } from "react";

function App() {
  const [name, changeName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    // change state function
    changeName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form autoComplete="off">
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={name.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
