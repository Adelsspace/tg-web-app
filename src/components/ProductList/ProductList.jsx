import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  {
    id: "1",
    title: "Курс по GO",
    price: 799,
    description: "Для новичков, легкий",
  },
  {
    id: "2",
    title: "Курс по JS",
    price: 199,
    description: "Для новичков, легкий",
  },
  {
    id: "3",
    title: "Курс по C",
    price: 1299,
    description: "Для новичков, средний",
  },
  {
    id: "41",
    title: "Курс по *nix",
    price: 7,
    description: "Сложный",
  },
  {
    id: "5",
    title: "Курс по Python",
    price: 1799,
    description: "Для продвинутых, средний",
  },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, cur) => acc + cur.price, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();
  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${getTotalPrice(newItems)} `,
      });
    }
  };
  return (
    <div className={"list"}>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          onAdd={onAdd}
          className={"item"}
        />
      ))}
    </div>
  );
};

export default ProductList;
