import logo from './logo.svg';
import "./App.css"
import Header from './Header';
import FoodItems from './FoodItems';
import FoodImages from './FoodImages';

let foodData = [
  { id: "dosa", foodName: "Masala Dosa", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcfx_c9HorbV0rMSHlb7NnKIIiyUYtN5jMQ&s" },
  { id: "biryani", foodName: "Biryani", thumbnail: "https://t3.ftcdn.net/jpg/01/35/45/36/360_F_135453699_VTRwi4EW86K5ct9dTEERpj9YkXYXAEEW.jpg" },
  { id: "haleem", foodName: "Haleem", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiSsopbe4XKZtNtXN1WsvamSUjRrdsMww6A&usqp=CAU" },
  { id: "sakinalu", foodName: "Sakinalu", thumbnail: "https://www.crazymasalafood.com/wp-content/images/sakinalu.jpg" },
  { id: "icecream", foodName: "IceCream ", thumbnail: "https://images.alphacoders.com/153/thumb-1920-153783.jpg" }


]

function App() {
  return (
    <div>
      <Header />
      <FoodItems />
      {foodData.map((food, i) => {
        return <FoodImages foodId={food.id} foodName={food.foodName} foodImg={food.thumbnail} />
      })}
    </div>
  );
}

export default App;
