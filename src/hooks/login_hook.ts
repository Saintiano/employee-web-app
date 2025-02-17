import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user_data";

function useLogin() {

    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [errorsEmail, setErrorsEmail] = useState<string>("");
    const [errorsPassword, setErrorsPassword] = useState<string>("");

    const navigate = useNavigate();

    const login = () => {

        setIsLogin(true);

        const users : User[] = JSON.parse(localStorage.getItem("users") || "[]");

        users.length === 0 ? 

        alert("No user found") :
        users.map((user : User) => {

            if(user.email === email && user.password === password){

                navigate("/dashboard");

            }else{

                alert("User login details not found");

            }

        });
    };

    const logout = () => {
        setIsLogin(false);
    };

    useEffect(() => {}, [password, email]);

    const handleErrors = (errorName: String) => {
        if (errorName === "email") {
            if (email === "") {
                setErrorsEmail("Email is required");
            } else {
                setErrorsEmail("");
            }
        } else if (errorName === "password") {

            if (password === "") {
                setErrorsPassword("Password is required");
            } else {

                if(password.length < 8){
                    setErrorsPassword("Password must be at least 8 characters");
                }else{
                    setErrorsPassword("");
                }
                
            }
        }
    };

    const handleUserPassword= (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setPassword(event.target.value);
        handleErrors("password");
        handleErrors("email");
     };
  
     const handleUserEmail= (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setEmail(event.target.value);
        handleErrors("email");
        handleErrors("password");
     };

     
    let handleSubmitData = (event : any) => {
        event.preventDefault()

        if(email !== "" && password !== ""){
            login();
        }


        // event.persist();
  
    }

    console.log("errors : ", errorsEmail, errorsPassword);

    return {
        handleSubmitData,
        isLogin,
        login,
        logout,
        handleUserEmail,
        handleUserPassword,
        email,
        password,
        errorsEmail,
        errorsPassword
    };
}

export default useLogin;