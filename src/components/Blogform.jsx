function Blogform() {
    return (
        <div className="container absolute top-[20%] bg-black w-[35%] h-[50%] rounded-md shadow-lg shadow-black text-white">
            <form action="http://localhost:3000/AddBlog" className="w-full flex flex-col items-center justify-center" method="post">
                <div className="flex flex-col gap-8 w-full h-[600px] justify-center items-center">
                    <input type="text" placeholder="Author Name:" className="p-4 bg-white text-black " />
                    <textarea type="text" placeholder="Details..." className="p-4 bg-white text-black" />
                    <button type="submit" className="p-4 bg-white text-black">Add</button>
                </div>
              
            </form>
        </div>
    )
}

export default Blogform;