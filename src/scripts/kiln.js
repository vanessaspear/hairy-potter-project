
export const firePottery = (potteryItem, temp) => {
    potteryItem.fired = true;
    if (temp > 2200) {
        potteryItem.cracked = true;
    } else {
        potteryItem.cracked = false;
    }
    return potteryItem;
}