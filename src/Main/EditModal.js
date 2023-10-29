import React, { useState } from "react";
import {
  Close,
  AddCircleOutlined,
  RemoveCircleOutlined,
} from "@mui/icons-material";

const EditModal = ({
  handleModalClose,
  productName,
  productId,
  productType,
  productImg,
  productPrice,
}) => {
  const reason = ["Missing Product", "Quantity is not the Same", "Price is not the same", "Others"];
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  

  return (
    <div className="modalBackDrop">
      <div className="modalContent">
        <div className="modalHeader">
          <span className="modalTitle" id="titleName">
            {productName}
          </span>
          <span className="closeButton">
            <Close onClick={handleModalClose} />
          </span>
        </div>
        <div id="productType">{productType}</div>
        <div className="productView">
          <img className="productImg" src={productImg} alt="" />
          <table className="productDetails">
            <tr>
              <th>Price&nbsp;&#40;&#36;&#41;</th>
              <td>
                <input id="price" type="number" value={productPrice} />
                &nbsp;/6*1LB
              </td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td id="quantity">
                <RemoveCircleOutlined
                  className="count"
                  id="minus"
                  onClick={() => handleQuantityChange(-1)}
                />
                &nbsp;
                <input id="quantity" type="number" value={quantity} readOnly />
                &nbsp;
                <AddCircleOutlined
                  className="count"
                  id="plus"
                  onClick={() => handleQuantityChange(1)}
                />
                &nbsp;/6*1LB
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td id="total">&#36;{productPrice * quantity}</td>
            </tr>
          </table>
        </div>
        <div>
          <div className="reason">
            <b>Choose Reason</b>&nbsp;&#40;Optional&#41;
          </div>
          <div>
            {reason.map((list, index) => (
              <button key={index} className="list">
                {list}
              </button>
            ))}
          </div>
        </div>
        <div className="editButton">
          <button id="cancel" onClick={handleModalClose} >Cancel</button>
          <button id="send">Send</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
