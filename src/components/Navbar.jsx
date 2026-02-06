import {Link} from 'react-router-dom';

function Navbar() {
    
    return (
        <div className="p-4 flex w-full justify-center drop-shadow-md drop-shadow-white gap-5 bg-white">
            <Link to="/" className='font-bold hover:scale-105 duration-150'>Home</Link>
            <Link to="/worker" className='font-bold hover:scale-105 duration-150'>Worker</Link>
        </div>
    )
}
export default Navbar;