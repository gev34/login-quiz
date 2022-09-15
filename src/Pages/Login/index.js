import { useState} from "react"
import Button from "../../components/Button"
import loginData from "../../loginData";
import Input from "../../components/Input/Input";
import TrueLogin from "../CheckLogin/TrueLogin";
import FalseLogin from "../CheckLogin/FalseLogin";

const Login = () => {

    const [emailPass , setEmailPass] = useState({});
    const [loginValidity , setLoginValidity] = useState()

    const isValidUser = () => {
        for(let i = 0 ; i < loginData.length ; i++) {
            if(loginData[i].email === emailPass.email && loginData[i].password === emailPass.password) {
                setLoginValidity(true)
                break;
            } 
            if(loginData[i].email !== emailPass.email && loginData[i].password !== emailPass.password) {
                setLoginValidity(false)
                break;
            } 
        }
    }
    console.log(loginValidity)
    return (
        <div>
            <form>
                <Input 
                    type = "email"
                    name = "email"
                    placeholder="Email" 
                    onChange={(e) => {
                        setEmailPass({...emailPass ,
                        [e.target.name] : e.target.value})
                    }}   
                />
                <Input 
                    type = "password"
                    name = "password"
                    placeholder="Password" 
                    onChange={(e) => {
                        setEmailPass({...emailPass ,
                        [e.target.name] : e.target.value})
                    }}   
                />
                
                <Button 
                    text = "Log In"
                    disabled = {Object.keys(emailPass).length > 1 ? false : true}
                    onClick = {(e) => {
                        e.preventDefault();
                        isValidUser();
                    }}
                    color = ""
                    backgroundColor = ""
                />
               {loginValidity ? <TrueLogin/> : <FalseLogin/>}
            </form>
                  
        </div>
    )
}
export default Login