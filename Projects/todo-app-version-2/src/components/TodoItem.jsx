function TodoItem({ todoItems }) {
  return (
    <div className="row kg-row bg-color">
      {todoItems.map((items) => {
        return (
          <>
            <div key={items.name} className="col-6">
              {items.name}
            </div>
            <div key={items.date} className="col-4">
              {items.date}
            </div>
            <div className="col-2 text-end">
              <button className="btn btn-danger kg-button">Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default TodoItem;
