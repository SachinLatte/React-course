function Clock() {
  let time = new Date();
  return (
    <>
      <h4>
        This is the current time: {time.toLocaleDateString()} -
        {time.toLocaleTimeString()}
      </h4>
      <div className="container">
        <button className="btn btn-primary">Current Time</button>
      </div>
    </>
  );
}

export default Clock;
