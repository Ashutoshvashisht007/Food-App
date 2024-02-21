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
]

const Home = () => {
  return (
    <div className="h-[calc(100vh-72px)] ">
        <section className=" flex items-center justify-center	bg-[url('https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=2048x2048&w=is&k=20&c=F0_z12DQE74SNDl2xrm4PbtrLWLcioHPGFsfmjtGTKM=')] bg-opacity-80 bg-top bg-cover bg-no-repeat m-auto w-full h-80" >
            <h3 className="bg-blue-950 text-white rounded-md w-1/4 p-4 text-center bg-opacity-80">Food App</h3>
        </section>
        <h2 className="text-2xl font-medium m-3 hover:border-b-2 border-black w-36 text-center">Food Items</h2>
        <div className="p-5 flex items-center gap-5">
          {
            data.map((data,idx) => (
              <FoodCard key={idx} name={data.name}/>
            ))
          }    
        </div>
    </div>
  )
}

export default Home

/*bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood-variety&psig=AOvVaw2kFmAb_YPlrjYaoRSlG0kf&ust=1708600823902000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDC6Z6ovIQDFQAAAAAdAAAAABAE')] bg-center bg-cover bg-no-repeat m-auto w-full h-80*/