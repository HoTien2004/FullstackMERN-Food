import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis id quaerat quae nobis, ipsum soluta dicta! Eos provident modi quos iste laborum, rerum consequuntur enim nostrum minima explicabo? Sapiente, illum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>DANH MỤC</h2>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Giới thiệu</li>
                        <li>Giao hàng</li>
                        <li>Chính sách</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>LIÊN HỆ</h2>
                    <ul>
                        <li>+84123456789</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Bản quyền 2025 © noodles.com - Mọi quyền được bảo lưu.</p>
        </div>
    )
}

export default Footer
