import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/Cake/CakeContainer";
import HooksCakeCountainers from "./components/Cake/HooksCakeCountainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeCountainers />
      </div>
    </Provider>
  );
}

export default App;
