
import Cards_Props_Type from "../types/cards_type";

interface CardsTestimonialProps {
    properties: Cards_Props_Type
}


function CardsTestimonial( {properties} : CardsTestimonialProps) {
  return (
    <div>
        <div className=" group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl   sm:rounded-lg sm:px-10 m-5">
            {/* <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span> */}
            <div className="relative  mx-auto max-w-md">
                                
                <div className="space-y-0 pt-0 text-base leading-6 text-gray-600 transition-all duration-300 group-hover:text-black/90">
                    <p className='mt-5 font-medium'>{properties.sectionSubHeader}</p>
                    
                    <div className="flex items-center gap-4 mt-5">
                        <img className="w-10 h-10 rounded-full" src={`${properties.cardImage}`} alt=""/>
                        <div className="font-medium dark:text-white">
                            <div className="font-bold">{properties.cardImageName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{properties.cardImagDescription}</div>
                        </div>
                    </div>
                </div>
                            
            </div>
        </div>
    </div>
  );
}

export default CardsTestimonial;