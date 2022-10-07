let key = 1; 

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    let pottery = {
         shape: potteryShape,
         weight: potteryWeight,
         height: potteryHeight,
         id: key
    }
    key++;
    return pottery;
}