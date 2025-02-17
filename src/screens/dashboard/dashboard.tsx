import { useState } from 'react';
import Menu_List_Items from '../../components/menu_list_items';
import NavBar from '../../components/nav_bar';
import { menuListItems } from '../../types/menu_list_Items';

function Dashboard() {

    const [listIndex, setListIndex] = useState<number>(0);

  return (
    <div>
        <NavBar 
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

        <div className="md:flex mt-20">
            <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">

                <Menu_List_Items properties={{
                    onClick(index, value) {
                        console.log(index, value);
                        setListIndex(index);
                    },
                    menu: menuListItems
                }}/>

            </ul>

            {
                listIndex === 0 ?
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800  w-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Dashboard Tab</h3>
                        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
                    </div>:
                listIndex === 1 ?
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800  w-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Employee Tab</h3>
                        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
                    </div>:
                listIndex === 2 ?
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800  w-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Settings Tab</h3>
                        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
                    </div>:
                listIndex === 3 ?
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800  w-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact Tab</h3>
                        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
                    </div>:
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800  w-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
                        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
                    </div>
            }

            

        </div>


    </div>
  );
}

export default Dashboard;