import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buyCake } from "../redux/Cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <>
      <div>
        <h2>Number of cake - {props.numberOfCakes}</h2>
        <button onClick={props.buyCake}>buy cake</button>
      </div>
    </>
  );
};

// export default CakeContainer;

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyCake: buyCake,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
