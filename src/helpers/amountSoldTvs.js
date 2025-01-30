import {inventory} from '../constants/inventory.js'

function amountSoldTvs () {
        let soldTvs = 0;
        inventory.forEach((item) => {
                soldTvs += item.sold;
        });

        return soldTvs;
}
export default amountSoldTvs;


