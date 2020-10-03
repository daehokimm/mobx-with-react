import React from "react";
import BasketItemList from "./BasketItemList";
import ShopItemList from "./ShopItemList";
import SuperMarketTemplate from "./SuperMarketTemplate";
import TotalPrice from "./TotalPrice";

const SuperMarket = () => {
  return (
    <SuperMarketTemplate
      items={<ShopItemList />}
      basket={<BasketItemList />}
      total={<TotalPrice />}
    />
  );
};

export default SuperMarket;
