function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4-10-2026";
  return (
    <div className="row kg-row bg-color">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2 text-end">
        <button className="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem1;
