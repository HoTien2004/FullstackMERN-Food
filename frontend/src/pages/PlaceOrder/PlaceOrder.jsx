import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Thông tin vận chuyển</p>
                <div className="multi-fields">
                    <input type="text" placeholder='Tên' />
                    <input type="text" placeholder='Họ' />
                </div>
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Địa chỉ' />
                <div className="multi-fields">
                    <input type="text" placeholder='Thành phố' />
                    <input type="text" placeholder='Quận' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Mã vùng' />
                    <input type="text" placeholder='Quốc gia' />
                </div>
                <input type="text" placeholder='Số điện thoại' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Tổng</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Tổng phụ</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Phí vận chuyển</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Tổng tiền</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button>THANH TOÁN</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
