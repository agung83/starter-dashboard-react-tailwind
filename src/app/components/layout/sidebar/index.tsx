
import { NavLink } from 'react-router-dom'
import ListMenu from '../../../../utils/listmenu'


interface SidebarType {
    statusSidebar: String | any
}

export const Sidebar = ({ statusSidebar }: SidebarType) => {
    return (
        <>
            <aside id="sidebar" className="bg-white shadow-xl dark:bg-gray-800 border-r-2 dark:border-blue-300 w-1/2 md:w-1/6 lg:w-1/6   hidden md:block lg:block md:overflow-y-scroll lg:overflow-y-scroll ">
                <ul className="flex flex-col mt-3">
                    {
                        ListMenu.map((value, key) => {
                            return (
                                <li className=" w-full h-full py-3 px-3" key={key}>
                                    <NavLink to={value.uri} className="flex font-sans font-hairline hover:font-normal dark:text-white text-sm text-nav-item no-underline">
                                        <value.icon className="flex-shrink-0 h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true" />
                                        <p className="ml-1 mt-1">{value.name}</p>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        </>
    )
}
