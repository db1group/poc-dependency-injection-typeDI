import { Service } from "typedi";

import { DRINK_SERVICE, Drink } from "./Drink";

@Service(DRINK_SERVICE)
export class Water implements Drink {
  create() {
    console.log("Water");
  }
}
