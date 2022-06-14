import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          items.map(item => (
            <div className='cartCard'>
              <img src={item.image} alt="product" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button onClick={() => handleRemove(item.id)} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart