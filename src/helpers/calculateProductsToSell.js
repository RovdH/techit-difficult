import {inventory} from "../constants/inventory.js";
function calculateProductsToSell() {
    let TvsSold = 0
    let TvsStock = 0
    for (let i = 0; i < inventory.length; i++) {
        TvsSold = TvsSold + inventory[i].sold;
        TvsStock = TvsStock + inventory[i].originalStock;
    }

    return TvsStock - TvsSold;
}

export default calculateProductsToSell;
