import { useState } from "react";

function UseStateHook() {
  const [name, setName] = useState("Default Name");

  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    // let updatedName = (
    //   document.getElementById("input-element") as HTMLInputElement
    // ).value;
    // setName(updatedName);
    setName(event.target?.value);
  }

  return (
    <>
      <input
        type="text"
        id="input-element"
        placeholder="Enter Your Name"
        onChange={updateName}
      />
      <h3>Name is: {name}</h3>
    </>
  );
}

export default UseStateHook;
