import React from 'react'
import "./orders.scss"
import {useLocation} from "react-router-dom"

const Orders = () => {
  const location = useLocation()
  const data = location.data;
  return (
    <div className='orders'>
      <div className="title">
        <h1>YOUR ORDERS</h1>
        <div className='orders-container'>
          <div className="table">
            {data?.length === 0 ? (
              <p>No order found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Order Date</th>
                    <th>Order name</th>
                    <th>Order Amount</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((orders, index) => {
                    const {
                      id,
                      date,
                      name,
                      address,
                      status,
                      email
                    } = orders;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>
                          {name} at {date}
                        </td>
                        <td>Email: {email}</td>
                        <td>{id}</td>
                        <td>
                          {address}
                        </td>
                        <td>
                          <p
                            className={
                              status !== "Delivered"
                                ? "pending"
                                : "delivered"
                            }
                          >
                            {status}
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
  )
}

export default Orders