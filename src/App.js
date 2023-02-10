import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
// Import selectPotentials(not default expo , so in {}) from the potentialCountriesSlice.jsl24
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
// Functional components: fun app() in app.js of components
function App() {
  let potentials = useSelector(selectPotentials);
  console.log(potentials);
  let currentDisplay = useSelector(selectDisplay);
    console.log("DISPLAY", currentDisplay);
  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;

/* QQ 2.8 CHECK CONNECTIONS:  connect all of the redux functionality so that your react application would now be able to access state on the global level.
1. use selector? HOOK FROM LIB
2. select potentials? VAR OF STORE
*/
