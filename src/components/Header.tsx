import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
//import { NavLink } from "react-router-dom";
//onClick={() => setTabOpen(tabOpen = !tabOpen)} className={`nav-item ${tabOpen && 'active'}`}
export default function Header() {
//  let [tabOpen, setTabOpen] = useState(false)

  return (
    <header>
      <div className='nav-bar'>
        <span className='logo'>ClothesBuy</span>
        <ul className='nav'>
          <li className='nav-item'><span>Корзина</span><FaShoppingCart className='cart-icon'/></li>
          <li className='nav-item'>Кабинет</li>
          <li className='nav-item'>Контакты</li>
          <li className='nav-item'>О нас</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  )
}
