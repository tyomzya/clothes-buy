import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className='nav-bar'>
        <span className='logo'>ClothesBuy</span>
        <ul className='nav'>
          <li><span>Корзина</span><FaShoppingCart className='cart-icon'/></li>
          <li>Кабинет</li>
          <li>Контакты</li>
          <li>О нас</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  )
}
