import { ArrowRight } from "lucide-react";
import Intro_Header_Type from "../types/intro_header_types";
import { Link } from "react-router-dom";

interface IntroHeaderProps {
    properties : Intro_Header_Type;
}

function Intro_Header( {properties} : IntroHeaderProps) {

  return (
    <div className="mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-1 gap-2 px-0 py-0 lg:py-8 md:grid-cols-2  mt-15 items-center">
                    
            <div>
                <div className="flex flex-col  mt-20 space-x-5 columns-6">
                    <h1 className="text-5xl font-bold ">{properties.sectionHeader}</h1>
                    <p className="text-lg mt-6">{properties.sectionSubHeader}</p>

                     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center mt-8">
                        <Link to="/signUp" >
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full min-w-36 flex items-center justify-center">
                                Start Hiring <ArrowRight color="white" size={20} className='ml-1'/>
                            </button>
                        </Link>
                        <Link to="/home_page_two" >
                            <button type="button" className="mx-4 min-w-36 py-2.5 px-5 me-2 mb-0 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Learn More
                            </button>
                        </Link>
                    </div>
                 </div>
            </div>

            <div>
                <div className="flex 2xl bg-white border border-gray-200 rounded-full shadow-2xl dark:bg-gray-800 dark:border-gray-700 columns-8">
                        <a href="#">
                                <img className="rounded-t-lg rounded-b-lg" src={`${properties.sectionImage}`} alt="advert_banner" />
                        </a>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Intro_Header;