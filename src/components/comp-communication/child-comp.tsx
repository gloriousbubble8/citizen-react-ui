function ChildComponent({ alertTrigger }: any) {
  function m1() {
    let msg = (document.getElementById("text-input") as HTMLTextAreaElement)
      ?.value;
    alertTrigger(msg);
  }

  return (
    <div>
      <div>
        <textarea
          id="text-input"
          placeholder="Enter your message here..."
        ></textarea>
      </div>

      <div>
        <button onClick={m1} style={{ marginTop: "5px" }}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ChildComponent;
