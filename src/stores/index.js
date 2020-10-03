const { default: CounterStore } = require("./counter");
const { default: MarketStore } = require("./market");

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;
