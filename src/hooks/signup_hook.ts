import { useEffect, useState } from "react";
import users, { User } from "../types/user_data";

function useSignUp() {

    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [companySize, setComapnySize] = useState<string>('');
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

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
        
        setAcceptedTerms(event.target.checked);
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

        localStorage.clear;

        if (email.length !== 0 && password.length !== 0 && companyName.length !== 0 && companySize.length !== 0 && acceptedTerms) {
            
            const user = new User( new Date().getTime(), companyName, email, password, companySize, acceptedTerms);

            users.push(user);

            console.log("User : ", user);

            localStorage.setItem("users", JSON.stringify(users));

            alert(`"User Created Successfully"`);

        }
        
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