import React, { useState } from 'react';

interface AddToCartButtonProps {
  dessert: any;
  addToCart: (dessert: any, quantity: number) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ dessert, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const [isHovered, setIsHovered] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex items-center justify-center px-4 py-1  bg-white text-black rounded-full  mt-2 w-fit pl-2 relative border-2 border-custom-red hover:bg-custom-red" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        

    {isHovered ? (
        <button>
            <span className=" mr-1 focus:outline-none text-white border-2 border-white rounded-full pl-1.5 pr-1.5 items-baseline" onClick={decrementQuantity}>
                -
            </span>
            <span className="text-m">{quantity}</span>
            <span className="p2 ml-1 focus:outline-none" onClick={incrementQuantity}>
                +
            </span>
            <span className="ml-1 px-1 py-1 text-custom-red rounded-full text-white" onClick={() => addToCart(dessert, quantity)}>
                Add
            </span>
        </button>
    ):(
        <button className=''>
            <div className='flex '>
                <img src="icon-add-to-cart.svg" alt="" className='pl-2 pr-2'/>
                <span className=''>Add To Cart</span>
            </div>
        
        </button>
    )}






    </div>
  );
};

export default AddToCartButton;




{/* <button>
            <div className='flex'>
                <img src="icon-add-to-cart.svg" alt="" />
                Add to Cart
            </div>
            
        </button> */}


      {/* <button className="p2 mr-1 focus:outline-none" onClick={decrementQuantity}>
        -
      </button>
      <span className="text-m">{quantity}</span>
      <button className="p2 ml-1 focus:outline-none" onClick={incrementQuantity}>
        +
      </button>
      <button className="ml-1 px-1 py-1 bg-white text-custom-red rounded-full" onClick={() => addToCart(dessert, quantity)}>
        Add
      </button> */}