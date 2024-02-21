import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-ninety ">
        <main className="flex flex-col  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full h-4/5 rounded-lg max-w-login p-6 ">
            <h3 className="text-2xl font-medium text-center m-5">Login</h3>
            <label className=" mt-4 ">Email id</label>
            <input className=" mt-2 p-3 border-b border-indigo-500 " type="email" />
            <label className=" mt-4 ">Password</label>
            <input className=" mt-2 p-3 border-b border-indigo-500  " type="password" />
            <button className="mt-10 bg-blue-950 hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md text-white p-2">Submit</button>
            <p className="mt-4 text-center">or</p>
            <button className="mt-5 bg-blue-950 hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md text-white p-2" onClick={()=> navigate("/signup")}>Signup</button>
        </main>
    </div>
  )
}

export default Login