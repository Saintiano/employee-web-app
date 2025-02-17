import { Globe } from "lucide-react";
import Cards_Props_Type from "../types/cards_type";

interface CardsProps {
    properties: Cards_Props_Type
}


function Cards( {properties} : CardsProps) {
  return (
    <div>
        <div className=" group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl   sm:rounded-lg sm:px-10 m-5">
            {/* <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span> */}
            <div className="relative  mx-auto max-w-md">
                                
                <div className="space-y-0 pt-0 text-base leading-6 text-gray-600 transition-all duration-300 group-hover:text-black/90">
                    {properties.cardHasNumbers ? 
                        <p className="text-3xl font-bold text-blue-500 mb-4">{properties.cardHasNumbersValue}</p> : 
                        properties.children
                    }
                    <h1 className="text-2xl font-bold mt-0 text-gray-900">{properties.sectionHeader}</h1>
                    <p className='mt-5 font-medium'>{properties.sectionSubHeader}</p>
                </div>
                            
            </div>
        </div>
    </div>
  );
}

export default Cards;