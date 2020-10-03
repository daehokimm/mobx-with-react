import { useObserver } from "mobx-react";
import React from "react";
import "./BasketItem.css";

const BasketItem = ({ item, onTake }) => {
  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>
        갖다 놓기
      </div>
    </div>
  ));
};

export default BasketItem;
