import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const items = await data.json();

    setItems(items);
    console.log(items);
  };
  return (
    <div>
      {items.map(item => (
        <h4 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h4>
      ))}
    </div>
  );
};
export default Shop;
