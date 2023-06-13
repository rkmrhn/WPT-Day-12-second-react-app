import React from "react";
// import "./App.css";

function App() {
  let str = "hello world";
  let pi = 3.14;
  let active = true;
  let isUserLoggedIn = true;

  return (
    <>
      <h1>hello world</h1>
      <h1>{str}</h1>
      <h1>PI:{pi}</h1>
      {/**if logged in */}
      {isUserLoggedIn && <h1>welcome to CDAC</h1>}
      {/**uses of boolean*/}
      <h1>{active ? "good morning" : "good night"}</h1>
      {/** MOST USEFUL  */}
      {active && <h1>Good Morning</h1>}
      {active ? <h1>Good Morning</h1> : <h1>Good Night</h1>}
    </>
  );
}

export default App;
