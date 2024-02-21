
interface foodCardComponent {
    name: string;
    price: number;
}

const FoodCard: React.FC<foodCardComponent> = ({name,price}) => {
  return (
    <div className="flex items-center flex-col gap-2">
        <img src="/src/assets/Home.jpg" className="h-36 w-36" alt="asuohdgoi" />
        <h3>{name}</h3>
        <h6>price: {price}</h6>
    </div>
  )
}

export default FoodCard