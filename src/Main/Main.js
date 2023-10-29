import {
  Search,
  LocalPrintshopOutlined,
  AcUnitOutlined,
  LiquorOutlined,
  FastfoodOutlined,
  CoffeeMakerOutlined,
  LunchDiningOutlined,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import "./Main.css";
import OrderList from "./OrderList/OrderList";

const Main = () => {
  return (
    <div className="main">
      <div className="orderDetails">
        <div className="orderDetailsList">
          <div className="summary">
            <div>Supplier</div>
            <div className="summaryDetails">East coast fruits & vegetables</div>
          </div>
          <div className="summary">
            <div>Shipping date</div>
            <div className="summaryDetails"> Thu, Feb 10</div>
          </div>
          <div className="summary">
            <div>Total</div>
            <div className="summaryDetails">15,028.3</div>
          </div>
          <div className="summary">
            <div>Category</div>
            <div className="summaryDetails">
              <CoffeeMakerOutlined />&nbsp;&nbsp;
              <AcUnitOutlined />&nbsp;&nbsp;&nbsp;
              <LiquorOutlined />&nbsp;&nbsp;&nbsp;
              <FastfoodOutlined />&nbsp;&nbsp;
              <LiquorOutlined />&nbsp;&nbsp;
              <CoffeeMakerOutlined />&nbsp;&nbsp;
              <LunchDiningOutlined/>&nbsp;&nbsp;
              <AcUnitOutlined/>

            </div>
          </div>
          <div className="summary">
            <div>Department</div>
            <div className="summaryDetails">300-444-678</div>
          </div>
          <div className="summary">
            <div>Status</div>
            <div className="summaryDetails">Awaiting your approval</div>
          </div>
        </div>
      </div>
      <div className="orderContainer">
        <div className="orderContainerHead">
          <div className="orderSearch">
            <TextField
              className="searchInput"
              // variant="outlined"
              placeholder="Search..."
              InputProps={{
                endAdornment: <Search position="end" />,
              }}
            />
          </div>
          <div className="addPrint">
            <button className="addItem">Add Item</button>
            <LocalPrintshopOutlined />
          </div>
        </div>
        <div className="orderList">
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default Main;
