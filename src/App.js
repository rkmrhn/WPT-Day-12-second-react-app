import React from "react";
// import "./App.css";

function App() {
  let id = "id1";
  let str = "hello world";
  let pi = 3.14;

  return (
    <>
      <h1 id="id1">Hello World</h1>
      <h1 id={id}>{str}</h1>

      {/** USE CASES*/}
      <h1 id="id1">Hello World</h1>
      <h1 id={"id1"}>Hello World</h1>
      <h1 id={`id1`}>Hello World</h1>
      <h1 id={id}>Hello World</h1>

      <h1>PI {pi} !!</h1>
    </>
  );
}

export default App;
