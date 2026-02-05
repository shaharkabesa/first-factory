
function Card(props) {
    return(
        <div style={{ display : "flex", 
        padding: "30px",
         flexDirection: "column",
          gap:"5px", background : "#ff45", margin:"5px", borderRadius:"10px"}}>
            <h1>Object ID: {props.id}</h1>
            <p>Object ID: {props.title}</p>
        </div>
    )
}
export default Card;