import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/Cake/cakeActions";

const HooksCakeCountainer = (props) => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Number of cake - {numberOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>buy cake</button>
      </div>
    </>
  );
};

export default HooksCakeCountainer;
