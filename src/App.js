import "bulma/css/bulma.css"
import { NavBar } from "./components/NavBAr/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
