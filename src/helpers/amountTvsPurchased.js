import {inventory} from '../constants/inventory.js'

function purchasedStock() {
        let purchasedTv = 0;
        inventory.forEach((item) => {
                purchasedTv += item.originalStock;
        });

        return purchasedTv;
}
export default purchasedStock;

