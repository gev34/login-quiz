import Input from "../../components/Input/Input";
import Button from "../../components/Button";
import loginData from "../../loginData";
import { useState } from "react";

const ForgotPassword = ({ setForgotPasswordInfo }) => {
  const [emailPassword, setEmailPassword] = useState({});

  // console.log(emailPassword)
  const changeUserData = () => {
    for (let i = 0; i < loginData.length; i++) {
      if (emailPassword.email === loginData[i].email) {
        loginData[i].password = emailPassword.password;
        break;
      }
    }
  };
  console.log(loginData);
  return (
    <div className="changeData">
      <Input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => {
          setEmailPassword({
            ...emailPassword,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <Input
        type="password"
        placeholder="New Password"
        name="password"
        onChange={(e) => {
          setEmailPassword({
            ...emailPassword,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <Button
        className="okButton"
        text="OK"
        disabled={false}
        onClick={(e) => {
          e.preventDefault();
          changeUserData();
          setForgotPasswordInfo(false);
        }}
        color="black"
        backgroundColor="white"
      />
      <button
        className="xForClose"
        onClick={() => {
          setForgotPasswordInfo(false);
        }}
      >
        X
      </button>
    </div>
  );
};
export default ForgotPassword;
