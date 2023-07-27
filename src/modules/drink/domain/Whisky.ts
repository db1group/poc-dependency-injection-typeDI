import { Service } from "typedi";
import { Drink, DRINK_SERVICE } from "./Drink";

@Service(DRINK_SERVICE)
export class Whisky implements Drink {
  create() {
    console.log("Whisky");
  }
}
