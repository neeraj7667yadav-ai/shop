import { useState } from "react";

const Counts = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="container">
      <div className="row  text-center">
        <div className="col-6 mx-auto border">
          <h1>counter App</h1>
          <h1>count: {count}</h1>

          <div className="row-4 p-3 d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (count < 10) {
                  setcount(count + 1);
                }
              }}
            >
              incress
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={()=>setcount(0)}
            >
              reset
            </button>
            <button type="button" class="btn btn-warning"
            onClick={() => {
                if (count > 0) {
                  setcount(count - 1);
                }
              }}>
              dicress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
