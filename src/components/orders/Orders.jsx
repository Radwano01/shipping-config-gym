import React from "react";
import "./orders.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const data = location.state?.data;

  const handleOrderDetail = (items)=>{
    navigate(`/order-details`, {state:{items}})
  }

  return (
    <div className="orders">
      <div className="title">
        <h1>YOUR ORDERS</h1>
        <div className="orders-container">
          <div className="table">
            {data?.length === 0 ? (
              <p>No order found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Order Date</th>
                    <th>Order Code</th>
                    <th>Order Address</th>
                    <th>Order Amount</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((orders, index) => {
                    const {
                      p_id,
                      o_date,
                      o_name,
                      o_address,
                      o_status,
                      o_price,
                      o_code,
                    } = orders;
                    return (
                      <tr key={p_id} onClick={()=> handleOrderDetail({state:{items:orders.o_items}})}>
                        <td>{index + 1}</td>
                        <td>{o_name} at {o_date}</td>
                        <td>{o_code}</td>
                        <td>{o_address === null && "NULL"}</td>
                        <td>{o_price}</td>
                        <td>
                          <p
                            className={
                              o_status !== "Delivered" ? "pending" : "delivered"
                            }
                          >
                            {o_status}...
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
