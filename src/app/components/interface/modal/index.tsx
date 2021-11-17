

export const Modal = () => {
    return (
        <>
            <div className="modal  flex h-screen w-full fixed left-0 top-0  justify-center items-center bg-black bg-opacity-75">
                <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                    <div className="border-b px-4 py-2 flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Modal Neee</h3>
                        <button className="text-black close-modal">Close</button>
                    </div>
                    <div className="p-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptate nisi ipsum repellat blanditiis. Ipsa, aliquam doloribus debitis porro voluptate quisquam veniam velit, dolorem molestias laudantium repellendus? Laudantium, molestias voluptas!
                    </div>
                    <div className="flex justify-end items-center w-100 border-t p-3">
                        <button className="bg-red-300 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                        <button className="bg-blue-300 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button>
                    </div>
                </div>
            </div>
        </>
    )
}
