import { observable, action } from "mobx";

export default class CounterStore {
  @observable number = 0;

  constructor(root) {
    this.root = root;
  }

  @action increase = () => {
    console.log("증가!!");
    this.number++;
  };

  @action decrease = () => {
    console.log("감소ㅜㅜ");
    this.number--;
  };
}
