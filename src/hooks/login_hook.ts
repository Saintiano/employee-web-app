import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useLogin() {

    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [errorsEmail, setErrorsEmail] = useState<string>("");
    const [errorsPassword, setErrorsPassword] = useState<string>("");

    const navigate = useNavigate();

    const login = () => {
        setIsLogin(true);
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
        navigate("/dashboard");
        
        navigate("/dashboard");

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