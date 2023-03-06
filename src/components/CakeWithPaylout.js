import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/Cake/cakeActions";

const CakeWithPayload = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const { numberOfCakes } = useSelector((state) => state.cake);
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} of cake
      </button>
    </div>
  );
};

export default CakeWithPayload;
