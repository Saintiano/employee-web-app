import { Link } from "react-router-dom";
import Nav_Bar from "../../components/nav_bar";
import useLogin from "../../hooks/login_hook";


const Login : React.FC = () => {

    const { handleSubmitData, handleUserEmail, handleUserPassword, email, password, errorsEmail, errorsPassword} = useLogin();
    
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

                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Login Into UpShore</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Access top global talent and transform your business today</p>
                
            </div>

            <div className="flex items-center justify-center h-120">
                <div className="w-full  max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 white:bg-gray-800 white:border-gray-700">
                    
                    <form  className='max-w-2xl mx-auto' >
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
                                onChange={handleUserEmail}
                            />
                            {errorsEmail.length !== 0 && <p className="text-red-400 font-light">{errorsEmail}</p>}
                        </div>
                        {/* <div className='mb-3'>
                        <InputForm
                            labels={`${"name"}`}
                            type="text"
                            id="name"
                            placeholder="type your name..."
                            />
                        </div> */}
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
                            {errorsPassword.length !== 0 && <p className="text-red-400 font-light">{errorsPassword}</p>}
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
                        <Link to="/signUp" >
                            <div className=" max-w-4xl mx-auto mt-5 text-center">
                                <span className="text-center my-5 items-center">Don't have an account? <span className="text-blue-600">Sign Up</span> </span>
                            </div>
                        </Link>
                    </form>

                </div>
            </div>


        </>
        
    );
  };
  
  export default Login;