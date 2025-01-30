import './App.css';
import {inventory} from "./constants/inventory.js";
import amountTvsPurchased from "./helpers/amountTvsPurchased.js";
import amountSoldTvs from "./helpers/amountSoldTvs.js";
import purchasedStock from "./helpers/amountTvsPurchased.js";

function App() {

  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
        <p> aantal verkochte tvs {amountSoldTvs()}</p>
        <p> aantal ingekochte tvs {purchasedStock()}</p>
        <p> aantal te verkopen tvs {inventory.map(item => item.originalStock).reduce((prev, next) => prev + next) - amountSoldTvs()}</p>
      </>
  )
}

export default App
