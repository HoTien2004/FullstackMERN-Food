import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Chọn món ăn yêu thích của bạn tại đây</h2>
                <p>Chọn từ thực đơn đa dạng bao gồm một loạt các món ăn ngon được chế biến từ những nguyên liệu tốt nhất và chuyên môn ẩm thực. Sứ mệnh của chúng tôi là thỏa mãn cơn thèm của bạn và nâng cao trải nghiệm ăn uống của bạn, mỗi lần một bữa ăn ngon.</p>
                <button>Xem thực đơn</button>
            </div>
        </div>
    )
}

export default Header
