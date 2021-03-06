import React, { useState, useEffect } from "react";

const Item = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
    );
    const item = await data.json();

    setItem(item);
    console.log(item);
  };
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.thumbnailUrl} alt="" />
    </div>
  );
};
export default Item;
