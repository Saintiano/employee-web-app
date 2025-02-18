import { Link } from "react-router-dom";
import Nav_Bar from "../../components/nav_bar";
import useSignUp from "../../hooks/signup_hook";
import React from "react";

const SignUp : React.FC = () => {

    const { 
      handleSubmitData,
      handleUserEmail,
      handleUserPassword,
      email,
      password,
      companyName,
      companySize,
      acceptedTerms,
      handleCompanyName,
      handleCompanySize,
      handleTermsAndCondition
   } = useSignUp();

    return (
      <>

            <Nav_Bar 
                properties={
                    {
                        showLogo : true,
                        showCenterText : false,
                        showTextNextToLogo : false,
                        showLoginAndGetStarted : false,
                        showNotificationAndProfile : false,
                    }
                } 
            />

            <div className=" max-w-4xl mx-auto mt-20 text-center">

                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Join UpShore</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Access top global talent and transform your business today</p>
                
            </div>

            <div className="flex items-center justify-center h-150">
                <div className="w-full  max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 white:bg-gray-800 white:border-gray-700">
                    
                    <form  className='max-w-2xl mx-auto' >
                        <div className='mb-3'>
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-light text-gray-900 dark:text-black">
                                    Company Name
                            </label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type='name' 
                                name='name' 
                                value={companyName}
                                placeholder="Enter your company name"
                                onChange ={handleCompanyName}
                            />
                        </div>
                        <div className='mb-3'>
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-light text-gray-900 dark:text-black">
                                    Work Email
                            </label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type='email' 
                                name='email' 
                                value={email}
                                placeholder="saintiano@gmail.com"
                                onChange ={handleUserEmail}
                            />
                        </div>
                        <div className='mb-3'>
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-light text-gray-900 dark:text-black">
                                    Password
                            </label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type='password' 
                                name='password' 
                                value={password}
                                placeholder="Create a strong password"
                                onChange ={handleUserPassword}
                            />
                        </div>   
                        <div className="">
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-light text-gray-900 dark:text-black">
                                    Company Size
                            </label>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                            value={companySize}
                            onChange={handleCompanySize}
                            name="companySize"
                            >

                                <option value="0">Select company size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="200+">200+ employees</option>

                            </select>

                        </div> 

                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center my-5">

                            <div className="flex items-center ">
                                <input 
                                    id="checked-checkbox" 
                                    type="checkbox" 
                                    checked={acceptedTerms}
                                    onChange={handleTermsAndCondition}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </input>
                            </div>
                            <p className="text-sm text-gray-900 dark:text-gray-400 mx-2"> I agree to UpShore's <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span></p>
                        
                        </div>  


                        <button 
                        style={{
                            width: "100%", 
                            height: "46px", 
                            marginTop: "10px",
                        }}
                            type="submit" 
                            onClick={handleSubmitData}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Submit
                        </button>
                        <Link to="/login" >
                            <div className=" max-w-4xl mx-auto mt-5 text-center">
                                <span className="text-center my-5 items-center">Already have an account? <span className="text-blue-600">Sign in</span> </span>
                            </div>
                        </Link>
                    </form>

                </div>
            </div>


        </>
    );
  };
  
  export default SignUp;