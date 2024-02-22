import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Navbar from "./components/Navbar"

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))
const Description = lazy(() => import("./pages/Description"))
const Search = lazy(() => import("./pages/Search"))


function App() {

  return (
    <Router>
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/desc" element={<Description />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
