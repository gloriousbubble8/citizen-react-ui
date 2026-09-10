import ChildComponent from "./child-comp";

function ParentComponent() {
  function triggerAlert(message: string) {
    alert("Hello World::" + message);
  }

  return (
    <>
      <h1>React Component Communication</h1>
      <ChildComponent alertTrigger={triggerAlert} />
    </>
  );
}

export default ParentComponent;
