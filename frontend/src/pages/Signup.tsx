

const Signup = () => {
    return (
        <div className="flex items-center justify-center h-ninety ">
            <main className="flex flex-col  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full h-4/5 rounded-lg max-w-login p-6 ">
                <h3 className="text-2xl font-medium text-center ">Signup</h3>
                <label className=" mt-4 ">Name</label>
                <input className=" mt-2 p-3 border-b border-indigo-500 " type="text" />
                <label className=" mt-4 ">Gender</label>
                <select className=" mt-2 p-3 border-b border-indigo-500 " >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                <label className=" mt-4 ">Email id</label>
                <input className=" mt-2 p-3 border-b border-indigo-500 " type="email" />
                <label className=" mt-4 ">Password</label>
                <input className=" mt-2 p-3 border-b border-indigo-500  " type="password" />
                <button className="mt-5  bg-blue-950 hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md text-white p-2">Signup</button>
            </main>
        </div>
    )
}

export default Signup