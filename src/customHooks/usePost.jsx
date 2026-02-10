import { useEffect, useState } from "react";


export function usePost(url,object) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

 
    
    const payload = {
        method: "POST",
        headers:  {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)

    }



    async function postData(event) {
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

    return { postData, data };
}