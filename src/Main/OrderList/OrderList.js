import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersRequest } from "../../redux/orderAction";
import { Check, Close, EditOutlined } from "@mui/icons-material";
import "./OrderList.css";
import ModalMissing from "../ModalMissing";
import EditModal from "../EditModal";

const OrderList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [approvalStatus, setApprovalStatus] = useState({});
  const [missingUrgentStatus, setMissingUrgentStatus] = useState({});
  const [missingStatus, setMissingStatus] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setEditShowModal] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedProductImg, setSelectedProductImg] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductPrice, setSelectedProducPrice] = useState("");

  useEffect(() => {
    dispatch(fetchOrdersRequest());
  }, [dispatch]);

  const handleModalClose = () => {
    setShowModal(false);
    setEditShowModal(false);
  };

  const handleShowModal = (productName, productId) => {
    setShowModal(true);
    setSelectedProductName(productName);
    setSelectedProductId(productId);
  };

  const handleEditModal = (productName, productId, productType, productImg, productPrice) => {
    setEditShowModal(true);
    setSelectedProductImg(productImg);
    setSelectedProductType(productType);
    setSelectedProductName(productName);
    setSelectedProductId(productId);
    setSelectedProducPrice(productPrice)
  };

  const handleCheckClick = (productId) => {
    // Toggle the approval status for the specific product
    setApprovalStatus((prevStatusMap) => ({
      ...prevStatusMap,
      [productId]: !prevStatusMap[productId],
    }));
  };

  const handleYesClick = (productId) => {
    setMissingUrgentStatus((prevStatusMap) => ({
      ...prevStatusMap,
      [productId]: !prevStatusMap[productId],
    }));
    setShowModal(false);
  };

  const handleNoClick = (productId) => {
    console.log("444", productId);
    setMissingStatus((prevStatusMap) => ({
      ...prevStatusMap,
      [productId]: !prevStatusMap[productId],
    }));
    setShowModal(false);
  };

  const renderTableData = () => {
    return products.map((product) => (
      <tr key={product.id}>
        <td className="productName">
          <img src={product.image_link} alt="" id="img" />
          {product.name}
        </td>
        <td className="productBrand">{product.brand}</td>
        <td className="productPrice">{product.price} / 6 * 1LB</td>
        <td className="productQuantity">1</td>
        <td className="productTotal">{product.price * 1}</td>
        <td className="status">
          <div className="currentStatus">
            <div className="viewStatus">
              {missingUrgentStatus[product.id] ? (
                <span className="missingUrgent">Missing-Urgent</span>
              ) : approvalStatus[product.id] ? (
                <span className="approved">Approved</span>
              ) : missingStatus[product.id] ? (
                <span className="missing">Missing</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <span className="clickIcons">
            <Check
              id={approvalStatus[product.id] && "check"}
              onClick={() => handleCheckClick(product.id)}
            />
            <Close
              id={
                missingUrgentStatus[product.id]
                  ? "missingUrgent"
                  : missingStatus[product.id]
                  ? "missing"
                  : ""
              }
              onClick={() => handleShowModal(product.name, product.id)}
            />
            <EditOutlined
              onClick={() =>
                handleEditModal(
                  product.name,
                  product.id,
                  product.product_type,
                  product.image_link,
                  product.price,
                )
              }
            />
          </span>
        </td>
      </tr>
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table className="orderListTable">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {showModal && (
        <ModalMissing
          productName={selectedProductName}
          handleModalClose={handleModalClose}
          handleYesClick={handleYesClick}
          handleNoClick={handleNoClick}
          productId={selectedProductId}
        />
      )}
      {showEditModal && (
        <EditModal
          productImg={selectedProductImg}
          productType={selectedProductType}
          productName={selectedProductName}
          handleModalClose={handleModalClose}
          productId={selectedProductId}
          productPrice={selectedProductPrice}
        />
      )}
    </div>
  );
};

export default OrderList;
