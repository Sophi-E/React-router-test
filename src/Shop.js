import React, { useState, useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const item = await data.json();
    console.log(item);
    setItems(item);
  };
  return (
    <div>
      {item.map(item => (
        <h1>{item.name} </h1>
      ))}
    </div>
  );
};
export default Shop;
