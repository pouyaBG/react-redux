import { Provider } from "react-redux";
import "./App.css";
import CakeWithPayload from "./components/CakeWithPaylout";
import HooksCakeCountainer from "./components/HooksCakeCountainer";
import HooksIcecreamsCountainer from "./components/HooksIcecreamCountainer";
import UserCountainer from "./components/UserContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeCountainer />
        <HooksIcecreamsCountainer />
        <CakeWithPayload />
        <UserCountainer />
      </div>
    </Provider>
  );
}

export default App;
