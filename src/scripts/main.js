// Imports go first
import { makePottery } from "./potteryWheel.js";

import { firePottery } from "./kiln.js";

import { toSellOrNotToSell } from "./potteryCatalog.js";

import { usePottery } from "./potteryCatalog.js";

import { potteryList } from "./potteryList.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 8, 6);
let bowl = makePottery("bowl", 16, 4);
let plate = makePottery("plate", 24, 3);
let cup = makePottery("cup", 8, 6);
let spoon = makePottery("spoon", 4, 6);
console.log(mug, bowl, plate, cup, spoon);

// Fire each piece of pottery in the kiln
let mugCure = firePottery(mug, 2200);
let bowlCure = firePottery(bowl, 2201);
let plateCure = firePottery(plate, 2000);
let cupCure = firePottery(cup, 2000);
let spoonCure = firePottery(spoon, 2000);

let potteryFired = [mugCure, bowlCure, plateCure, cupCure, spoonCure];
console.log(potteryFired);

// Determine which ones should be sold, and their price
toSellOrNotToSell(potteryFired);
console.log(usePottery());

// Invoke the component function that renders the HTML list

let parentHTMLString = document.querySelector(".potteryList");

parentHTMLString.innerHTML = potteryList(potteryFired); 







