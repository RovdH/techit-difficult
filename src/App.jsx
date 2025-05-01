import './App.css';
import calculateProductValues from "./helpers/calculateProductValues.js";
import {inventory} from "./constants/inventory.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";


function App() {

  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
        <p> aantal verkochte Tvs {calculateProductValues(inventory, "sold")}</p>
          <p> aantal ingekochte Tvs  {calculateProductValues(inventory, "originalStock")}</p>
        <p> aantal te verkopen Tvs {calculateProductsToSell()}</p>
      </>
  )
}

export default App
