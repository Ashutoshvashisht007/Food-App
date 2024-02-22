import FoodCard from "../components/FoodCard"


const data = [
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
    {name: "pizza",
    price: 50,},
  ]

const Search = () => {
  return (
    <div className="flex items-center w-screen justify-center h-[calc(100vh-72px)]">
        <div className="flex items-center justify-start flex-col border-solid border-2 border-black w-3/4 h-4/5">
            <input type="text" placeholder="search" className="p-3 border-b border-indigo-500 w-2/4 mt-3 " />
            <div className="p-5 flex items-center justify-center gap-5 mt-6 flex-wrap overflow-auto">
          {
            data.map((data,idx) => (
              <FoodCard key={idx} name={data.name}/>
            ))
          }    
        </div>
        </div>
    </div>
  )
}

export default Search