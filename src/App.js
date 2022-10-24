import {Provider} from "react-redux"
import store from "./redux/store"
import Counter from "./components/Counter.js"
import HooksCounter from "./components/HooksCounter.js"

function App() {
  return (
    <Provider store={store}>
    <div className="flex flex-row  m-32">
     
     <HooksCounter />
    </div>
   
     </Provider>
  );
}

export default App;
