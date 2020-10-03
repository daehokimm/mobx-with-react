import { observable, action, computed } from "mobx";

export default class MarketStore {
  @observable selectedItems = [];

  constructor(root) {
    this.root = root;
  }

  @action
  put = (name, price) => {
    console.log(`put 함수 호출! : name = ${name} / price = ${price}`);
    const number = this.root.counter;

    // 해당 아이템이 있는지 먼저 찾은 후에
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: number,
      });
      console.log(`${this.selectedItems.map((item) => item.name)}`);
      return;
    }

    exists.count += number;
  };

  @action
  take = (name) => {
    console.log("take 함수 호출!");
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  @computed
  get total() {
    console.log("총합 계산!!");
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  }
}
