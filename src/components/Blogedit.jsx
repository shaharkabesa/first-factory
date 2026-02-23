import { useState } from "react"

function Blogedit(props) {
    const [author, setAuthor] = useState("");
    const [details, setDetails] = useState("");
    return (
        <div>
            <input type="text" placeholder={props.author} onChange={(e)=> {
                setAuthor(e.target.value);
            }} />
            <input type="textarea" placeholder={props.details} onChange={(e)=> {
                setAuthor(e.target.value);
            }} />
        </div>
    )
}