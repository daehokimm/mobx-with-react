import { observable } from "mobx";
import { counter } from "./counter"; // 스토어끼리 연결

const market = observable({
  selectedItems: [],
  put(name, price) {
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: counter.number,
      });
      console.log(`${this.selectedItems.map((item) => item.name)}`);
      return;
    }

    exists.count += counter.number;
  },
  take(name) {
    console.log("take 함수 호출!");
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  },
  get total() {
    console.log("총합 계산!!");
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  },
});

export { market };
