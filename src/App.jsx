import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  multiplyByAmount,
  resetCount,
} from "./features/countSlice";

function App() {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="my-app">
        <h1>Count is {count}</h1>
        <div className="btn">
          <button type="button" onClick={() => dispatch(increase())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrease())}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(multiplyByAmount(5))}>
            Multiply By 5
          </button>
          <button type="button" onClick={() => dispatch(resetCount())}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
