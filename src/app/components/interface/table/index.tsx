import { PencilIcon, TrashIcon } from "@heroicons/react/outline"

export const TableData = () => {
    return (
        <>
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="p-3 w-8 font-bold text-sm dark:border-blue-300 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600 border border-gray-300 hidden lg:table-cell">No</th>
                        <th className="p-3 font-bold text-sm dark:border-blue-300 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600 border border-gray-300 hidden lg:table-cell">Nama Sekolah</th>
                        <th className="p-3 font-bold text-sm dark:border-blue-300 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600 border border-gray-300 hidden lg:table-cell">Satuan Pendidikan</th>
                        <th className="p-3 font-bold text-sm dark:border-blue-300 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600 border border-gray-300 hidden lg:table-cell">Npsn</th>
                        <th className="p-3 font-bold text-sm dark:border-blue-300 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600 border border-gray-300 hidden lg:table-cell">Data Lengkap</th>
                        <th className="p-3 font-bold text-sm dark:border-blue-300 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-gray-700  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">

                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Nomor</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    1
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Nama Sekolah</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs">
                                    SMA NEGERI 1 PADANG PANJANG
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Satuan Pendidikan</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full text-xs dark:text-white ">
                                    SMA
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Npsn</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    123233232
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Data Lengkap</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    123233232
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Actions</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs">
                                    <button type="button" className="px-1 mr-2  py-1 bg-yellow-300 rounded-md"><PencilIcon className="h-4 w-4" />
                                    </button>
                                    <button type="button" className="px-1  py-1 bg-red-300 rounded-md"><TrashIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-700  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">

                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Nomor</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    1
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Nama Sekolah</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    SMA NEGERI 1 PADANG
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Satuan Pendidikan</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full text-xs dark:text-white ">
                                    SMA
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Npsn</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    123233232
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Data Lengkap</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs ">
                                    123233232
                                </div>
                            </div>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center dark:border-blue-300 border border-b block lg:table-cell relative lg:static">
                            <div className="flex justify-between">
                                <div>
                                    <span className="lg:hidden absolute top-0 left-0  px-2 py-3 font-semibold dark:text-white  text-xs ">Actions</span>
                                </div>
                                <div className="w-48 md:w-48 lg:w-full dark:text-white text-xs">
                                    <button type="button" className="px-1 mr-2  py-1 bg-yellow-300 rounded-md"><PencilIcon className="h-4 w-4" />
                                    </button>
                                    <button type="button" className="px-1  py-1 bg-red-300 rounded-md"><TrashIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}
