import { useState } from "react";
import Button from "../../components/Button";
import loginData from "../../loginData";
import Input from "../../components/Input/Input";
import TrueLogin from "../CheckLogin/TrueLogin";
import FalseLogin from "../CheckLogin/FalseLogin";
// import ForgotPassword from "../ForgotPassword/ForgotPassword";
import "./index.css";

const Login = ({ forgotPasswordInfo, setForgotPasswordInfo }) => {
  const [emailPass, setEmailPass] = useState({});
  const [loginValidity, setLoginValidity] = useState();
  const [showLoginInfo, setShowLoginInfo] = useState(false);
  // const [forgotPasswordInfo, setForgotPasswordInfo] = useState(false);

  const isValidUser = () => {
    for (let i = 0; i < loginData.length; i++) {
      if (
        loginData[i].email === emailPass.email &&
        loginData[i].password === emailPass.password
      ) {
        setLoginValidity(true);
        setShowLoginInfo(true);
        break;
      }
      if (
        loginData[i].email !== emailPass.email &&
        loginData[i].password !== emailPass.password
      ) {
        setLoginValidity(false);
        setShowLoginInfo(true);
        break;
      }
    }
  };
  //console.log(emailPass)
  // console.log(loginValidity)
  // console.log(showLoginInfo)
  return (
    <div className="parent">
      <form>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmailPass({ ...emailPass, [e.target.name]: e.target.value });
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setEmailPass({ ...emailPass, [e.target.name]: e.target.value });
          }}
        />
        <Button
          className="forgotBtn"
          text="Forgot Password"
          disabled={false}
          onClick={(e) => {
            e.preventDefault();
            setForgotPasswordInfo(true);
          }}
          color=""
          backgroundColor="rgb(0, 91, 165)"
        />

        <Button
          className="loginBtn"
          text="Log In"
          disabled={Object.keys(emailPass).length > 1 ? false : true}
          onClick={(e) => {
            e.preventDefault();
            isValidUser();
          }}
          color="rgb(0, 91, 165)"
          backgroundColor="white"
        />
      </form>
      {/* {forgotPasswordInfo && <ForgotPassword setForgotPasswordInfo = {setForgotPasswordInfo}/> } */}
      <div className="loginInfo">
        {loginValidity && showLoginInfo && (
          <TrueLogin setShowLoginInfo={setShowLoginInfo} />
        )}
        {!loginValidity && showLoginInfo && (
          <FalseLogin setShowLoginInfo={setShowLoginInfo} />
        )}
      </div>
    </div>
  );
};
export default Login;
