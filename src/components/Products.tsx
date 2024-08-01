import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const productItems = [
  {
    id: 1,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './products/carhartt tshirt1.jpg',
    price: '50$'
  },
  {
    id: 2,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './products/carhartt tshirt2.jpg',
    price: '50$'
  },
  {
    id: 3,
    productType: 'Jacket',
    brand: 'Carhartt',
    image: './products/carhartt jacket1.jpg',
    price: '100$'
  },
  {
    id: 4,
    productType: 'Jacket',
    brand: 'Carhartt',
    image: './products/carhartt jacket2.jpg',
    price: '100$'
  },
  {
    id: 5,
    productType: 'Bag',
    brand: 'Carhartt',
    image: './products/carhartt bag1.jpg',
    price: '70$'
  },
  {
    id: 6,
    productType: 'T-Shirt',
    brand: 'Wolee',
    image: './products/wolee tshirt1.webp',
    price: '30$'
  },
  {
    id: 7,
    productType: 'Shorts',
    brand: 'Wolee',
    image: './products/wolee shorts1.webp',
    price: '25$'
  },
  {
    id: 8,
    productType: 'Pants',
    brand: 'Wolee',
    image: './products/wolee pants1.webp',
    price: '40$'
  },
]

export default function Products() {
  return (
    <main>
      <h1>Список товаров</h1>
      <div className="product-list">
        {productItems.map(el => 
          <div className='product'>
            <img src={el.image} alt="Product Image" className='product-image'/>
            <div className='product-description'>
              <div className="product-text">
                <span>{el.productType} {el.brand}</span>
                <span className='price'>{el.price}</span>
              </div>
              <FaCartPlus className='add-cart-icon'/>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
