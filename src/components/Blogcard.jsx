function Blogcard(props) {
    return(
        <div className="p-6 bg-black rounded-md shadow-md shadow-black max-w-[420px]  gap-4 flex bg-white flex-col text-white">
            <h1 className="p-4 bg-white text-black">Author ID: {props.blogid}</h1>
            <h1 className="p-4 bg-white text-black">Author Name: {props.author}</h1>
            <p className="p-4 bg-white text-black" >Blog Details {props.details}</p>
            <button className="p-4 bg-white text-black rounded-sm hover:scale-102 duration-105 hover:font-semibold">Read more...</button>
        </div>
    )
}

export default Blogcard;