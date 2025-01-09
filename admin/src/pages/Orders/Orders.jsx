import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios';
import { toast } from "react-toastify";
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {

    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url + "/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
        } else {
            toast.error("Error");
        }
    }

    const statusHandler = async (event, orderId) => {
        const response = await axios.post(url + "/api/order/status", { orderId, status: event.target.value });
        if (response.data.success) {
            toast.success("Cập nhật trạng thái thành công!");
            fetchAllOrders();
        } else {
            toast.error("Cập nhật trạng thái thất bại!");
        }
    }

    useEffect(() => {
        fetchAllOrders();
    }, [])

    return (
        <div className='order add'>
            <h3>Trang quản lý đơn hàng</h3>
            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className='order-item'>
                        <img src={assets.parcel_icon} alt="Parcel Icon" />
                        <div>
                            <p className="order-item-food">
                                {/* Hiển thị danh sách món ăn trong đơn hàng */}
                                {order.items.map((item, index) => (
                                    index === order.items.length - 1
                                        ? `${item.name} x ${item.quantity}`
                                        : `${item.name} x ${item.quantity}, `
                                ))}
                            </p>
                            <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
                            <div className="order-item-address">
                                <p>{order.address.street + ", "}</p>
                                <p>{order.address.city + ", " + order.address.district + ", " + order.address.country + ", " + order.address.zipcode}</p>
                            </div>
                            <p className='order-item-phone'>{order.address.phone}</p>
                        </div>
                        <p>Số lượng : {order.items.length}</p>
                        <p>${order.amount}</p>
                        <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                            <option value="Đang xử lý">Đang xử lý</option>
                            <option value="Đang giao hàng">Đang giao hàng</option>
                            <option value="Đã giao hàng">Đã giao hàng</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
