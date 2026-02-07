import { useState, useEffect } from "react";

export function useFetch(url, slice, amount) {
    const [data,setData] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getData();
    },[url])

    async function getData() {
        try {
            const response = await fetch(url);
            switch(true) {
                case (response.status == 200):
                    let jsonifiedRes = await response.json();
                    switch (slice) {
                        case true:
                            jsonifiedRes = jsonifiedRes.slice(0,amount);
                         
                            break;
                        default:
                            break;
                    }
                    setData(jsonifiedRes);

                    console.log("Data Loaded Succesfully ✅");
                case (response.status != 200):
                    setError(true);
                    setErrorMessage(`ERROR ❌\n
                        Status Code: ${response.status}
                        \nStatus Message: ${response.statusText}`);
                        break;
            }
            
            


        } catch(error) {
            setError(true);
            setErrorMessage(`ERROR: ${error}`);
            
        }
    }

    return {data, setData , error, errorMessage};
    

}

