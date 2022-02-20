import React from "react";

import PackagesSelector from "../PackagesSelector";
import './ItemDetail.css';


const ItemDetail = () => {

  const inicial = 1;
  const max = 10;

  const currentItem = JSON.parse(localStorage.getItem('current-item'));

  return (
      <>
        <div>
          <img className="image item-detail-image" alt="ImageNotFound" src={currentItem.foto} />
          <h3>{currentItem.name}</h3>
          <p>Precio: ${currentItem.price}</p>
          <p>Stock: {currentItem.stock}</p>
        </div>
        <PackagesSelector inicial={inicial} max={currentItem.stock || max} itemId={currentItem.id}  />
      </>
    );
  };

  export default ItemDetail;