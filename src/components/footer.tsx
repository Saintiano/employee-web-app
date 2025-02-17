function Footer() {
  return (
    <>
        <div className="h-40 ">

        </div>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-white-500 sm:text-center dark:text-white-400">
                    
                <a href="https://clovisokonkwo.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />    
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">UpShore</span>
                </a>
                        
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">UpShore – Bridging the Distance, Elevating Your Business</a>
                </li>
            </ul>
        </footer>
    </>
  );
}

export default Footer;