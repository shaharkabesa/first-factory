import { useEffect, useState } from "react";
import Card from "./Card";



function Worker() {
    const [workState,setWorkState] = useState("IDLE...");
    const [data,setData] = useState([]);
    const [search, setSearchQuery] = useState("");
    useEffect(() => {
        fetchData()
    },[])
    
    async function fetchData() {
        try {
            const getData = await fetch("https://jsonplaceholder.typicode.com/todos");
            
            switch(getData.status) {
                case 200:
                    let jsondata = await getData.json();
                    jsondata = jsondata.slice(0,5);
                    setData(jsondata);
                    console.log("Data Retrieved Succesfuly ✅");
                    break;
                default:
                    console.log(`Status code: ${getData.status}\nError: ${getData.statusText}`);
                    break;
                    
            
            }

        } catch(error) {
            console.log(`Something went wrong... \nError Message: ${error}`);
        }
    }

        
            const newdata = data.filter(object => {
            return object.id.toString() === search;
        }).map((object) => {
              return(
                    <Card key={object.id} id={object.id} title={object.title} />
                )
        }); 
      
       

    return (
        <div>
            <input type="text" placeholder={search} onChange={(e) => {
                setSearchQuery(e.target.value);
            }} />
            {data ? "Loaded Data ✅" : "Loading...🔃"}
            
            {data && search.length == 0 ? data.map((object) => {
                return(
                    <Card key={object.id} id={object.id} title={object.title} />
                )
            }) : newdata}           
        </div>
    )
}

export default Worker;

