function AddToDo() {
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" name="todoInput" placeholder="Input ToDo Here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2 text-end">
        <button className="btn btn-success kg-button">Add</button>
      </div>
    </div>
  );
}

export default AddToDo;
