import { useFetch } from "../customHooks/useFetch";
import Blogcard from "./Blogcard";
import { IoMdAddCircle } from "react-icons/io";
import Blogform from "./blogForm";
import { useState } from "react";

function Blog() {
    const {data, useData, error, errorMessage} = useFetch("http://localhost:3000/blog");
    const [addModal, setModal] = useState(false);
    return (
        <div className="w-full h-[90vh] relative  gap-4 flex-col items-center  bg-white flex">
             {data.length > 0 ? <h1 className="p-4">Data Loaded Succesfully ✅</h1> : ""}
         <div className="container_card flex gap-4 ">
            {data.length > 0 ? data.map((blog) => {
                return (<Blogcard key={blog.id} blogid={blog.id} author={blog.Author} details={blog.Details}  />)
            })  : ""}
            
         </div>
           
        <div className="absolute top-1 cursor-pointer right-1" onClick={() => {
            setModal(!addModal);
        }}>
            <h1 className="text-lg p-4 bg-black text-white rounded-md font-semibold">ADD +</h1>
        </div>
           
            {addModal ?  <Blogform modalStatus={addModal} setStatus={setModal} /> : ""}
        </div>
    )
}

export default Blog;