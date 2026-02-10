import Item from "./Item";
function Todoitem({ singleItem }) {
  return (
    <ul className="list-group">
      {singleItem.map((item) => {
        return <Item key={item} data={item} />;
      })}
    </ul>
  );
}

export default Todoitem;
