import { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 2);
  }

  // If No dependency is specified, useEffect call back function invoked once for each render
  //   useEffect(() => {
  //     console.log("Use Effect method invoked....");
  //   });

  useEffect(() => {
    console.log("Use Effect method with empty dependencies::" + count);
  }, [count]);

  return (
    <div>
      <h3>Count::{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
