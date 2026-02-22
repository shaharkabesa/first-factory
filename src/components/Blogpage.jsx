import {useFetcher, useParams} from "react-router-dom"
import { useFetch } from "../customHooks/useFetch";
import { useEffect } from "react";


function Blogpage() {
    const {id} = useParams();
    const {data} = useFetch(`http://127.0.0.1:3000/blog/getblog/${id}`);
    console.log(data);
    


    return (
        <div className="h-[90vh]  w-full flex flex-col bg-white items-center">
            <div className="p-4 bg-black w-full text-center drop-shadow-black drop-shadow-lg">
                <h1 className="text-2xl text-white">{data.length  > 0 ? <h1>{data[0].author_name}</h1> : ""} </h1>
            </div>

            <div className="p-4 w-full h-[80%] text-center bg-gray-100">
                {data.length > 0 ? `${data[0].details}` : "awaiting data...."}    
            </div>
            <div className="flex flex gap-8 bg-gray-100 w-full justify-center">
                
            <button className="p-4 m-2 hover:bg-black hover:text-white duration-150 rounded-md border-black text-md font-bold border-1">Edit</button>
            <button className="p-4 m-2 hover:bg-black hover:text-white duration-150 rounded-md border-black text-md font-bold border-1">Delete</button>
            </div>
            
            
            </div>
    )
}

export default Blogpage;