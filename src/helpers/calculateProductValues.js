function calculateProductValues(productArray, parameter) {
    let total = 0
    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i][parameter];
    }
    return total;
}

export default calculateProductValues;
