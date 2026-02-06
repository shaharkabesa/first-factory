import {Link} from "react-router-dom";


function Card(props) {
    return(
        <div className="group transition duration-300 hover:scale-105 cursor-pointer flex flex-col drop-shadow-sm rounded-xl shadow-orange-500 shadow-sm  max-w-[600px] p-5 gap-5 mt-10 bg-white text-black gap-5">
            <h1 className="">Object ID: {props.id}</h1>
            <p>Object ID: {props.title}</p>
            <button className="p-5  transition duration-500 hover:bg-white hover:text-black tranistion-1 text-white drop-shadow-lg shadow-md shadow-black bg-black r-5 rounded-lg text-lg font-bolder" onClick={() => props.execute(props.id)}>Delete Listing</button>
            <Link className="p-5  transition duration-500 hover:bg-white hover:text-black tranistion-1 text-white drop-shadow-lg shadow-md shadow-black bg-black r-5 rounded-lg text-lg font-bolder text-center" to={`details/${props.id}`}>Details</Link>
        </div>
    )
}
export default Card;