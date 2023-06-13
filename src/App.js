import React from "react";
// import "./App.css";

function App() {
  let str = "hello";
  let pi = 3.14;
  let active = true;
  let user={id:1,name:"rohan",email:"rohan@gmail.com"};

  return(
    <>
    <h1>{str}</h1>
    <h1>PI:{pi}</h1>
    {active && <h1>how are you</h1>}
    <h1>ID:{user.id} NAME:{user.name} EMAIL:{user.email}</h1>
    </>
  )

 
}

export default App;
