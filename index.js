(function exportAll() {

    getChange = (totalPayable, cashPaid) => {
        let totalChange = cashPaid - totalPayable;
        let change = [];
        let coinTypes = [200, 100, 50, 20, 10, 5, 2, 1];
        for (let i = 0; i < coinTypes.length; i++) {
            if (totalChange >= coinTypes[i]) {
                let thisCoin = coinTypes[i] * Math.floor(totalChange / coinTypes[i])
                change.push(thisCoin);
                totalChange -= thisCoin;
            }
        }
        return change;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getChange };
    }
}());

// OLD VERSION:
        // while (totalChange > 0) {
        //     if (totalChange >= 200) {
        //         let thisCoin = 200 * Math.floor(totalChange / 200)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 100) {
        //         let thisCoin = 100 * Math.floor(totalChange / 100)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 50) {
        //         let thisCoin = 50 * Math.floor(totalChange / 50)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 20) {
        //         let thisCoin = 20 * Math.floor(totalChange / 20)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 10) {
        //         let thisCoin = 10 * Math.floor(totalChange / 10)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 5) {
        //         let thisCoin = 5 * Math.floor(totalChange / 5)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 2) {
        //         let thisCoin = 2 * Math.floor(totalChange / 2)
        //         change.push(thisCoin);
        //         totalChange -= thisCoin;
        //     }
        //     if (totalChange >= 1) {
        //         let thisCoin = totalChange;
        //         change.push(thisCoin);
        //         totalChange = 0;
        //     }
        // }