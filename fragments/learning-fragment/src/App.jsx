import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodList = ["Dal", "Rice", "Roti", "Vegetables", "Salad"];
  return (
    <>
      <div className="container">
        <h1>Helthy Food List</h1>
        <ul className="list-group">
          {foodList.map((item) => {
            return (
              <li key={item} className="list-group-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
