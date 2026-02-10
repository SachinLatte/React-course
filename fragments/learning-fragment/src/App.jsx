import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Todoitem from "./Todoitem";
function App() {
  let foodList = ["Dal", "Rice", "Roti", "Vegetables", "Salad", "Ghee"];
  return (
    <>
      <div className="container">
        <Heading />
        <Todoitem singleItem={foodList} />
      </div>
    </>
  );
}

export default App;
