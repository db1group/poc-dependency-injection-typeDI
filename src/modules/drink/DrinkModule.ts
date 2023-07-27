import Container from "typedi";
import { DefaultModule } from "./domain/Module";
import { DRINK_SERVICE } from "./domain/Drink";
import { Whisky } from "./domain/Whisky";
import { Juice } from "./domain/Juice";
import { Water } from "./domain/Water";

export class DrinkModule implements DefaultModule {
  provide(): void {
    Container.set(DRINK_SERVICE, new Whisky());
  }
}
