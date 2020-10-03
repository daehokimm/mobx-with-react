import { observer } from "mobx-react";
import React from "react";
import "./BasketItem.css";

const BasketItem = ({ item, onTake }) => {
  return (
    <div className="BasketItem" onClick={() => onTake(item.name)}>
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return">갖다 놓기</div>
    </div>
  );
};

export default observer(BasketItem);
