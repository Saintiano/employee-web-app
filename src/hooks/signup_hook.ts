import { useEffect, useState } from "react";
import { User } from "../types/user_data";

function useSignUp() {

    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [companySize, setComapnySize] = useState<string>('');
    const [acceptedTerms, setAcceptedTerms] = useState<number>(0);

    const [errorsEmail, setErrorsEmail] = useState<string>("");
    const [errorsPassword, setErrorsPassword] = useState<string>("");

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

    const handleCompanyName= (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setCompanyName(event.target.value);
        handleErrors("password");
        handleErrors("email");
    };

    const handleTermsAndCondition= (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setAcceptedTerms(Number(event.target.value));
        handleErrors("password");
        handleErrors("email");
    };

    const handleCompanySize= (event: React.ChangeEvent<HTMLSelectElement>) => {
        
        setComapnySize(event.target.value);
        handleErrors("password");
        handleErrors("email");
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
        console.log("Form Submitted : ", `email : ${email} password : ${password} company name : ${companyName} company size : ${companySize} accepted terms : ${acceptedTerms}`);
        
        const user = new User(1, companyName, email, password, companySize, acceptedTerms);

        console.log("User : ", user);

        // event.persist();
  
    }

    // console.log("errors : ", errorsEmail, errorsPassword);

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
    errorsPassword,
    companyName,
    companySize,
    acceptedTerms,
    handleCompanyName,
    handleCompanySize,
    handleTermsAndCondition

  };
}

export default useSignUp;