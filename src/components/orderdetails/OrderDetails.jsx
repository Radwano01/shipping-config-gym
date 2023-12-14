import React from 'react'
import { useLocation } from 'react-router-dom';
import "./orderdetails.scss"

const OrderDetails = () => {
    const location = useLocation()
    const data = location.state?.items;
    const details = JSON.parse(data.state.items)

    return (
        <div className="order-detail">
          <br />
          <div className="order-detail-container">
            {data === null ? (
              <div>loading...</div>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>s/n</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details?.map((item, index) => (
                      <tr key={item.p_id}>
                        <td>
                          <b>{index + 1}</b>
                        </td>
                        <td>
                          <div className="img">
                            <ul>
                              <li>Arm Length: {item.arm}</li>
                              <li>Body Size: {item.size}</li>
                              <li>Color: {item.color}</li>
                            </ul>
                          </div>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.cartTotalQuantity}</td>
                        <td>{(item.price * item.cartTotalQuantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      );
}

export default OrderDetails