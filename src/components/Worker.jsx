import { useEffect, useState } from "react";
import Card from "./Card";
import { useFetch } from "../customHooks/useFetch";



function Worker() {
   

    const [search, setSearchQuery] = useState("");
    
    const {data, setData, error, errorMessage} = useFetch("https://jsonplaceholder.typicode.com/todos",true,5)
        
            const newdata = data.filter(object => {
            return object.id.toString() === search;
                    }).map((object) => {
                        return(
                                <Card key={object.id} id={object.id} title={object.title}  execute={deleteItem}  />
                            )
                    }); 
      
       
        function addItem() {
           
            let newid = Date.now(); 
           
            const newItem = {
                userid :1,
                id: newid,
                title: "My title"
            };

            const updatedList = [...data, newItem];
            setData(updatedList);
        }

        function deleteItem(idtodelete) {
           console.log("Hello");
            const newdata = data.filter((object) => object.id != idtodelete);
            setData(newdata);
            
        }

    return (
        <div className=" ">
            <input type="text"  className="p-4 mr-5 bg-orange-100 rounded-lg" placeholder="Enter Specific ID" onChange={(e) => {
                setSearchQuery(e.target.value);
            }} />
            <button onClick={addItem} className="p-4 m-5 bg-orange-100 rounded-lg">Add new item</button>
            {data.length > 0 ? <h1 className="p-4 bg-red-50 drop-shadow-md shadow-lg ">Loaded Data ✅</h1> : error ? <h1 className="p-4 bg-red-50 drop-shadow-md shadow-lg ">{errorMessage} </h1> : "Loading...🔃"}
            
            {data && search.length == 0 ? data.map((object) => {
                return(
                    <Card key={object.id} id={object.id} title={object.title} 
                    execute={deleteItem} />
                )
            }) : newdata}           
        </div>
    )
}

export default Worker;

