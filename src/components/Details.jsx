import { useEffect, useState } from "react";
import {useFetcher, useParams} from "react-router-dom"
import { useFetch } from "../customHooks/useFetch";



function Details() {
    const {id} = useParams();
    
   const {data, error, errorMessage} = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

   
    return (
      
       <div className="w-full flex justify-center bg-gray-100 text-black items-center h-[800px]">
         {data.userId ? <div className="text-xl font-semibold flex flex-col gap-5">
                <h1>User ID: {data.userId}</h1>
                <h1>Post ID: {data.id}</h1>
                <p>Post Details: {data.title}</p>
            </div> : error ? <h1>{errorMessage}</h1> : "Loading 🔃..." }
            
       
        </div>
    )
} 

export default Details;