import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <nav className=" p-4 flex justify-between items-center">
        <div>
            <span className="text-2xl hover:text-sky-700 cursor-pointer" onClick={()=> navigate("/")}>Food App</span>
        </div>
        <div className="flex items-center">
            <span className="text-xl hover:text-sky-700 cursor-pointer mr-5" onClick={handleClick}>Log in</span>
            <button className="bg-blue-950 hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md text-white p-2 flex items-center justify-between " onClick={()=> navigate("/search")}>
              <span className=" mr-2 " ><CiSearch /> </span>
              Search
            </button>
        </div>
    </nav>
  )
}

export default Navbar