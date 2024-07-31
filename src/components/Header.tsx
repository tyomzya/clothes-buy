import React from 'react'

export default function Header() {
  return (
    <header>
      <div className='nav-bar'>
        <span className='logo'>ClothesBuy</span>
        <ul className='nav'>
          <li>Кабинет</li>
          <li>Контакты</li>
          <li>О нас</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  )
}
