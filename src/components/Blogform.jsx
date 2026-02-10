import { useEffect, useState } from "react";
import { usePost } from "../customHooks/usePost";


function Blogform(props) {
    const [author,setAuthor] = useState("");
    const [details,setDetails] = useState("");

    const object = {
        "Author": author,
        "Details": details
    }


    const { postData } = usePost("http://localhost:3000/blog/AddBlog", object)
    


    return (
        <div className="container absolute top-[20%] bg-black w-[35%] min-h-[50%] rounded-md shadow-lg shadow-black text-white">
            <form action="http://localhost:3000/blog/AddBlog" onSubmit={(e) => {
                postData(e);
          
            }} className="w-full flex flex-col items-center justify-center" method="post">
                <div className="flex flex-col gap-8 w-full min-h-[600px] justify-center items-center">
                    <input type="text" placeholder="Author Name:" required onChange={(e) => setAuthor(e.target.value)} className="p-4 bg-white text-black " />
                    <textarea type="text" placeholder="Details..." required onChange={(e) => setDetails(e.target.value)} className="p-4 bg-white text-black" />
                    <button type="submit" onClick={() => {
                       props.setStatus(false);
                    }} className="p-4 bg-white text-black">Add</button>

                    
                </div>
             
            </form>
        </div>
    )
}

export default Blogform;