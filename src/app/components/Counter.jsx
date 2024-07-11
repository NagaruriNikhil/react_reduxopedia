import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "../../redux/store";

function Counter() {
  //If we want to retrieve state we need use hook useSelector()
  //If we want to call action methods then we hook useDispatch()
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(() => {
    return 10;
  });

  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <div className="text-success pb-2">Basic Counter</div>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <div className="text-success pb-2">Multiplier Counter</div>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  type="text"
                  placeholder="multiplier..."
                  className="form-control"
                  value={multiplier}
                  onChange={(e) => {
                    setMultiplier(e.target.value);
                  }}
                />
              </div>

              <div className="col-4 p-1">
                <button
                  className="btn btn-primary form-control"
                  onClick={() => dispatch(incrementMultiplier(multiplier))}
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-danger form-control"
                  onClick={() => dispatch(decrementMultiplier(multiplier))}
                >
                  Remove
                </button>
              </div>
            </div>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
