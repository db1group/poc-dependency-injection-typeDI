import "reflect-metadata";
import { Container, Service, Inject } from "typedi";
import { DRINK_SERVICE, Drink } from "./modules/drink/domain/Drink";
import { DrinkModule } from "./modules/drink/DrinkModule";

const SERVICE_NAME = "drink.service";
@Service(SERVICE_NAME)
class StartDrink {
  constructor(
    @Inject(DRINK_SERVICE)
    private readonly drinkService: Drink
  ) {}

  toBeCrazy() {
    this.drinkService.create();
  }
}

new DrinkModule().provide();
let coffeeMaker = Container.get<StartDrink>(SERVICE_NAME);
coffeeMaker.toBeCrazy();
