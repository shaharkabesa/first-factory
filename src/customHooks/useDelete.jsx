import { useState } from "react";


export default function useDelete(url,object) {
        const [data, setData] = useState([]);
        const [error, setError] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
            
     
        
        const payload = {
            method: "DELETE",
            headers:  {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
    
        }
    
    
    
        async function deleteData(event) {
            event.preventDefault();
            try {
                let response = await fetch(url,payload);
                if(response.ok) {
                    let jsonData = response.json();
                    setError(false);
                    setData(jsonData);
                }
            } catch(err) {
                setError(true);
                setErrorMessage(err);
            }
        } 
    
        return {deleteData};
}