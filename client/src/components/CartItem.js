import React, { useContext } from "react";
// link
import { Link } from "react-router-dom";
// icons
import { IoClose } from "react-icons/io5";
// components
import Qty from "../components/Qty";
// context
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`https://fortunate-thrill-58143f8683.strapiapp.com${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        {/* title and remove icon  */}
        <div className="flex mb-3 gap-x-4">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div onClick={() => removeFromCart(item.id)} className="cursor-pointer text-[24px] hover:text-accent transition-all">
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
            <div className="text-accent text-xl">
              $ {item.attributes.price * item.amount}
            </div>
          </div>
          {/* price */}
          <div></div>
        </div>
        <span className="text-accent">$ {item.attributes.price} per piece</span>
      </div>
    </div>
  );
};

export default CartItem;
