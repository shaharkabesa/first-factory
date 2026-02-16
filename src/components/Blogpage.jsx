function Blogpage() {
    return (
        <div className="h-[100vh] w-full flex flex-col bg-white items-center">
            <div className="p-4 bg-black w-full text-center drop-shadow-black drop-shadow-lg">
                <h1 className="text-2xl text-white">Blog title </h1>
            </div>

            <div className="p-4 w-full h-[80%] text-center bg-gray-100">
                content here
                
            </div>
            <button className="p-2 rounded-sm border-black border-1">Edit</button>
                <button className="p-2 rounded-sm border-black border-1">Delete</button>
            <div className="flex flex-col gap-4">
                
            </div>
            
            </div>
    )
}

export default Blogpage;