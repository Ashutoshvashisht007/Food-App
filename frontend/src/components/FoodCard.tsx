import { useNavigate } from "react-router-dom";

interface foodCardComponent {
    name: string;
}

const FoodCard: React.FC<foodCardComponent> = ({name}) => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col gap-2">
        <img src="/src/assets/Home.jpg" className="h-36 w-36" alt="asuohdgoi" />
        <h3>{name}</h3>
        <h6 className="text-blue-500 hover:cursor-pointer" onClick={()=> navigate("/desc")}>more</h6>
    </div>
  )
}

export default FoodCard