
const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
        <div>
            <span className="text-2xl hover:text-sky-700 cursor-pointer">Food App</span>
        </div>
        <div className="flex items-center">
            <span className="text-xl hover:text-sky-700 cursor-pointer mr-5">Log in</span>
            <button className="bg-blue-950 hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md text-white p-2">Book A Table</button>
        </div>
    </nav>
  )
}

export default Navbar