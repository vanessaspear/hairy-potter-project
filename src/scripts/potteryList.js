import { usePottery } from "./potteryCatalog.js";

let htmlString = "";

export const potteryList = () => {
    let potteryForSale = usePottery();
    for (let pottery of potteryForSale) {
        htmlString +=
        `<section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pottery.price}</div>
        </section>`;
    }
    return htmlString;
}