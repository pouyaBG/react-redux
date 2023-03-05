import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../../redux/IceCream/icecreamAction";

const HooksIcecreamsCountainer = (props) => {
  const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams);
  console.log(props);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Number of cake - {numberOfIcecreams}</h2>
        <button onClick={() => dispatch(buyIcecream())}>buy ice</button>
      </div>
    </>
  );
};

export default HooksIcecreamsCountainer;
