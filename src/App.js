import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword"
import { useState } from "react";

function App() {
  const [forgotPasswordInfo, setForgotPasswordInfo] = useState(false);
  return (
    <div className="App">
      {forgotPasswordInfo ? <ForgotPassword setForgotPasswordInfo = {setForgotPasswordInfo}/> :     <Login forgotPasswordInfo = {forgotPasswordInfo} setForgotPasswordInfo = {setForgotPasswordInfo}/>}
    </div>
  );
}

export default App;
