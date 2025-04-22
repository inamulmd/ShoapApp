import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";


const CartItems = ({item, itemIndex}) => {
     const dispatch = useDispatch();

    const removefromCart = () => {
        dispatch(remove(item.id));
        toast.success("Iteam Removed");
    }

  return (
    <div>
      <div>
         <div>
            <img src={item.image} />
         </div>
         <div>
            <h1> {item.title}</h1>
            <h1> {item.description}</h1>
            <div>
                <p>{item.price}</p>
            </div>
            <div
            onClick={removefromCart}> <MdOutlineDeleteOutline />
             </div>
         </div>

      </div>

    </div>
  )
}

export default CartItems