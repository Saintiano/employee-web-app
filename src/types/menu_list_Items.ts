import { ArrowRight, Camera, CircleHelp, Globe, Zap } from 'lucide-react';// Replace 'your-icon-library' with the actual library name

interface ListItems {
    name: string,
    link: string,
}

export default interface MenuListItems {
    onClick?: (index: number, value: boolean) => void,
    menu?: ListItems[]
}



export const menuListItems: ListItems[] = [

            {
                name: "Dashboard",
                link: "/dashboard",
            },
            {
                name: "Employees",
                link: "/employee",
            },
            {
                name: "Settings",
                link: "/settings",

            },
            {
                name: "Contact",
                link: "/contact",

            },
            {
                name: "Profile",
                link: "/profile",
            },

]

