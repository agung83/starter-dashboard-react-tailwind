
import { NavLink } from 'react-router-dom'

interface SidebarType {
    statusSidebar: String | any
}

export const Sidebar = ({ statusSidebar }: SidebarType) => {
    return (
        <>
            <aside id="sidebar" style={{ "display": statusSidebar }} className="bg-white dark:bg-gray-900 border-r-2 dark:border-blue-300 border-gray-300 w-1/2 md:w-1/6 lg:w-1/6 hidden md:block lg:block">

                <ul className="flex flex-col">
                    <li className=" w-full h-full py-3 px-3">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <p className="ml-1 mt-1">Dashboard</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="ml-1 mt-1">Manajemen</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="ml-1 mt-1">Schedule</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3  ">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                            <p className="ml-1 mt-1">Data Sekolah</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3  ">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <p className="ml-1 mt-1">Siswa</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3  ">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <p className="ml-1 mt-1">Verifikasi</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3  ">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                            </svg>
                            <p className="ml-1 mt-1">Perangkingan</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3   hover:bg-blue-100">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            <p className="ml-1 mt-1">Pangkalan Data</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3   hover:bg-blue-100">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <p className="ml-1 mt-1">Laporan</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3   hover:bg-blue-100">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <p className="ml-1 mt-1">Daftar Ulang</p>
                        </NavLink>
                    </li>
                    <li className=" w-full h-full py-3 px-3   hover:bg-blue-100">
                        <NavLink to="/" className="flex font-sans font-hairline hover:font-normal dark:text-white  text-sm text-nav-item no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                            </svg>
                            <p className="ml-1 mt-1">Inbox</p>
                        </NavLink>
                    </li>

                </ul>

            </aside>
        </>
    )
}
