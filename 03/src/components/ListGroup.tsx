// import { Fragment } from "react";
// https://youtu.be/SqcY0GlETPk?t=1777
function ListGroup() {
  const items = ["A", "B", "C", "D", "E"];
  //items = [];
  //const message = items.length === 0 ? <p>No items found</p> : null;

  const getMessage = () => {
    return (message = items.length === 0 ? <p>No items found</p> : null);
  };

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items found</p>;
  //     </>
  //   );
  // }

  // https://youtu.be/SqcY0GlETPk?t=2213
  return (
    <>
      <h1>List</h1>
      {/* //  {message} */}

      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    // <Fragment>
    //   <h1>List</h1>
    //   <ul className="list-group">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </Fragment>
  );
}

export default ListGroup;
