import { Provider } from "react-redux";
import "./App.css";
import CakeWithPayload from "./components/CakeWithPaylout";
import HooksCakeCountainer from "./components/HooksCakeCountainer";
import HooksIcecreamsCountainer from "./components/HooksIcecreamCountainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeCountainer />
        <HooksIcecreamsCountainer />
        <CakeWithPayload />
      </div>
    </Provider>
  );
}

export default App;
