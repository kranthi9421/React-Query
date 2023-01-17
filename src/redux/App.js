import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./redux/counter";
import { fetchUsers } from "./redux/user";

const App = () => {
  const countVal = useSelector((state) => state.counter);
  const use = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {use.loading
        ? "loading"
        : use.users.map((item) => {
            return (
              <div>
                <h1>{item.title}</h1>
              </div>
            );
          })}
      {use.errorMsg ? use.errorMsg : null}
      <h1>The count is : {countVal.count} </h1>
      <button onClick={() => dispatch(incrementAsync())}>Incremenet</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        IncremenetBy
      </button>
      {countVal.loading && <h1>Welcome MR Santhosh && Mrs Manisha</h1>}
    </div>
  );
};

export default App;
