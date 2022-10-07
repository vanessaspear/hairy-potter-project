let potteryForSale = [];

export const toSellOrNotToSell = (potteryFired) => {
    for (let pottery of potteryFired) {
        if (pottery.cracked != true) {
            if (pottery.weight >= 6) {
                pottery.price = 40;
            } else {
                pottery.price = 20;
            }
            potteryForSale.push(pottery);
        } 
    }
}

export const usePottery = () => {
    return potteryForSale.map(potteryForSale => ([...potteryForSale]));
    //return potteryForSale;
}