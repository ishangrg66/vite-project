import React from 'react'

const Cart = () => {
  return (
    <>
    <h1 className="text-center mt-3 text-decoration-underline">Cart items</h1>
    <table className="table w-75 mx-auto text-center table-striped table-hover align-middle" role="button">
        <thead className="table-dark">
            <tr>
                <td>S.No</td>
                <td>Product Image</td>
                <td>Product Name</td>
                <td>Unit Price</td>
                <td>Quantity</td>
                <td>Total Price</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td><img src="./Laptop.jpeg" alt="" style={{height:'150px'}}/></td>
                <td>Laptop</td>
                <td>Rs. 1,50,000</td>
                <td>1</td>
                <td>Rs. 1,50,000</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning"><i className="bi bi-pencil-square">UPDATE</i></button>
                        <button className="btn btn-danger"><i className="bi bi-trash">REMOVE</i></button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>1.</td>
                <td><img src="./gym.jpeg" alt="" style={{height:'150px'}}/></td>
                <td>Multi GYM</td>
                <td>Rs. 5,00,000</td>
                <td>2</td>
                <td>Rs. 10,00,000</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning"><i className="bi bi-pencil-square">UPDATE</i></button>
                        <button className="btn btn-danger"><i className="bi bi-trash">REMOVE</i></button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>1.</td>
                <td><img src="./ipad.jpeg" alt="" style={{height:'150px'}}/></td>
                <td>Ipad Pro</td>
                <td>Rs. 1,50,000</td>
                <td>10</td>
                <td>Rs. 15,00,000</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning"><i className="bi bi-pencil-square">UPDATE</i></button>
                        <button className="btn btn-danger"><i className="bi bi-trash">REMOVE</i></button>
                    </div>
                </td>
            </tr>
        </tbody>
        
    </table>
    </>
  )
}

export default Cart