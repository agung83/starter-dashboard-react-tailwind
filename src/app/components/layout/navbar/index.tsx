
import { useState, useEffect } from 'react'
import { Switch, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import ListMenu from '../../../../utils/listmenu'

interface ThemeType {
    setLightMode: () => {},
    setDarkMode: () => {},
    showSidebar: () => {},
    hiddenSidebar: () => {},
    statusSidebar: String
}

export function Navbar({ setLightMode, setDarkMode, showSidebar, hiddenSidebar, statusSidebar }: ThemeType) {
    const [enabled, setEnabled] = useState(false)
    const [isShowing, setIsShowing] = useState(false)
    let theme = localStorage.getItem('theme')
    useEffect(() => {
        if (theme == "light") {
            setEnabled(false)
            setLightMode()
        } else {
            setEnabled(true)
            setDarkMode()
        }
    }, [theme])

    const switchChange = () => {
        if (theme == "dark") {
            setEnabled(false)
            setLightMode()
        } else {
            setEnabled(true)
            setDarkMode()
        }
    }

    const sidebarOpen = () => {
        if (statusSidebar == "block") {
            hiddenSidebar()
        } else {
            showSidebar()
        }
    }



    return (
        <>
            <header className="bg-white dark:bg-gray-800 border-b-2  dark:border-blue-300  sticky top-0 z-50">
                <div className="flex justify-between">
                    <div className="p-1 mx-3 inline-flex items-center">
                        {/* <button type="button" onClick={sidebarOpen} className="md:block lg:block hidden hover:text-blue-600 dark:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button> */}
                        <button type="button" onClick={() => setIsShowing((isShowing) => !isShowing)} className="md:hidden lg:hidden hover:text-green-600 dark:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-gray-800 dark:text-white font-bold p-2">STARTER ADMIN</h1>
                    </div>
                    <div className="p-1 flex flex-row items-center">
                        <div className="pr-4">
                            <Switch
                                checked={true}
                                onChange={switchChange}
                                className={`${enabled ? 'bg-gray-700' : 'bg-gray-300'
                                    } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform  rounded-full  bg-gray-100`}
                                />
                            </Switch>
                        </div>
                        <img className="inline-block h-8 w-8 rounded-full" src="https://ppdb.sumbarprov.go.id/img/pilih_jalur.598e9978.png" alt="" />
                        <a href="#" className="dark:text-white text-gray-800 p-2 text-sm no-underline hidden md:block lg:block">Agung Laksmana</a>
                        <div id="ProfileDropDown" className="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                            <ul className="list-reset">
                                <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">My account</a></li>
                                <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Notifications</a></li>
                                <li><hr className="border-t mx-2 border-grey-ligght" /></li>
                                <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
            <Transition
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="md:hidden lg:hidden sticky top-0 dark:bg-gray-800 bg-white"
            >
                <ul className="flex flex-col mt-3">
                    {
                        ListMenu.map((value, key) => {
                            return (
                                <li className="w-full h-full py-3 px-3" key={key}>
                                    <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white text-sm text-nav-item no-underline">
                                        {<value.icon />}
                                        <p className="ml-1 mt-1">{value.name}</p>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </Transition>
        </>
    )
}
