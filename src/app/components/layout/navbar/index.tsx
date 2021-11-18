
import { useState, useEffect, Fragment } from 'react'
import { Switch, Transition, Menu } from '@headlessui/react'
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
                        <Menu as="div" className="relative inline-block text-left mr-1">

                            <div>
                                <Menu.Button className="dark:text-white text-gray-800 p-2 text-sm no-underline hidden md:block lg:block">
                                    <img className="inline-block h-8 w-8 mr-2 rounded-full" src="https://ppdb.sumbarprov.go.id/img/pilih_jalur.598e9978.png" alt="" />
                                    Agung Laksmana

                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right dark:bg-gray-700 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'text-gray-900 dark:text-white dark:bg-gray-600  bg-gray-100' : 'dark:text-white text-gray-900'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                >

                                                    Logout
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
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
                className="md:hidden lg:hidden sticky top-0 z-50 dark:bg-gray-700 bg-gray-50 overflow-y-scroll h-96"
            >
                <div className="p-3 font-medium dark:text-white">
                    <img className="inline-block mr-3 h-8 w-8 rounded-full" src="https://ppdb.sumbarprov.go.id/img/pilih_jalur.598e9978.png" alt="" />
                    Hi, Agung Laksmana
                </div>
                <ul className="grid grid-cols-2 gap-4 mt-3">
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
            </Transition>
        </>
    )
}
