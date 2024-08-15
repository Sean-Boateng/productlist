// Home.tsx
import React, { useState } from 'react';
import AddToCartButton from './components/AddToCart';


const Home = () => {
  const [cart, setCart] = useState<any[]>([]);
  const desserts = [
    { id: 1, name: "Waffle with Berries", category:"Waffle", price: "$6.50", image:"image-waffle-desktop.jpg" },
    { id: 2, name: "Vanilla Bean Crème Brûlée", category:"Crème Brûlée", price: "$7.00", image:"image-waffle-desktop.jpg" },
    { id: 3, name: "Macaron Mix of Five", category:"Macaron", price: "$8.00", image:"image-macaron-desktop.jpg" },
    { id: 4, name: "Classic Tiramisu", category:"Tiramisu", price: "$5.50", image:"image-tiramisu-desktop.jpg" },
    { id: 5, name: "Pistachio Baklava", category:"Baklava", price: "$4.00" , image:"image-waffle-desktop.jpg"},
    { id: 6, name: "Lemon Meringue Pie", category:"Pie", price: "$5.00", image:"image-meringue-desktop.jpg" },
    { id: 7, name: "Red Velvet Cake", category:"Cake", price: "$4.50", image:"image-waffle-desktop.jpg" },
    { id: 8, name: "Salted Caramel Brownie", category:"Brownie", price: "$5.50", image:"image-waffle-desktop.jpg" },
    { id: 9, name: "Vanilla Panna Cotta", category:"Panna Cotta", price: "$6.50", image:"image-waffle-desktop.jpg" },
  ];

  const addToCart = (dessert: any, quantity: number) => {
    setCart([...cart, { ...dessert, quantity }]);
  };
  
  const formatPrice = (price: string): number => {
    // Remove the dollar sign and convert to number
    return parseFloat(price.replace('$', ''));
  };


  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => {
      const priceNumber = formatPrice(item.price);
      return total + priceNumber * item.quantity;
    }, 0);
  };

  const cartTotal = calculateCartTotal();

  return (
    <div className="flex justify-between p-6">

        
        
        <div className="card shadow-xl w-3/4">
            <h1 className="text-4xl font-bold mb-8">Desserts</h1>
            <div className='grid grid-cols-3 gap-3'>
                {desserts.map((dessert)=>(
                    <div key={dessert.id} className=" rounded-lg p-4 text-left mb-3">
                        <figure className='relative'>
                            <img
                            src={dessert.image}
                            alt="img" 
                            className='h-fit rounded-md' />
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                                <AddToCartButton dessert={dessert} addToCart={addToCart} />
                            </div>
                        </figure>
                        <div className="relative card-body mt-2">
                            
                            
                            <div className="card-actions justify-end">
                            <p className="text-gray-600 text-sm mt-8">{dessert.category}</p>
                            <h2 className="card-title text-xl font-semibold mb-1">{dessert.name}</h2>
                                <p className="text-lg mb-4 text-custom-red">{dessert.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>   
        </div>







        {/* <div className="w-3/4">
            <h1 className="text-4xl font-bold mb-8">Desserts</h1>
            <div className="grid grid-cols-3 gap-6">
                {desserts.map((dessert) => (
                    <div key={dessert.id} className="border rounded-lg p-4 text-center bg-white">
                        <div key={dessert.id} className="border rounded-lg p-4 text-center bg-white">
                            <div className="relative mb-4 h-36 bg-gray-200 rounded-lg flex items-center justify-center">
                                <img src={dessert.image} alt="" />
                                <div className="flex items-center justify-center z-0">
                                
                                </div>
                                <div className="absolute top-28 z-10">
                                    <AddToCartButton dessert={dessert} addToCart={addToCart} />
                                </div>
            
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold mb-2">{dessert.name}</h2>
                        <p className="text-lg text-gray-600 mb-4">{dessert.price}</p>
                    </div>
                ))}
            </div>
        </div> */}
      <div className="w-1/4 border rounded-lg p-6 bg-gray-50 h-fit m-2">
        <h2 className="text-2xl font-bold mb-6 text-custom-red">Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <div className="h-36 bg-gray-200 rounded-lg flex items-center justify-center">
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <ul className="space-y-4">
    {cart.map((item, index) => {
      // Compute the total price
      const priceNumber = formatPrice(item.price);
      const totalPrice = priceNumber * item.quantity;

      // Format total price to currency
      const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

      return (
        <div>
            <div className=''>
                <li key={index} className="flex-col justify-between items-center border-b pb-2">
                         <div className='flex justify-between w-full'>
                            <span className='flex justify-start'>{item.name}</span>
                            <button className="ml-4 text-custom-rose hover:text-black" onClick={() => removeFromCart(index)}>
                                X
                            </button>
                        </div>               
   
                        <div className='text-custom-rose text-xs'>
                            <span className='text-custom-red text-sm mr-3'>{item.quantity}x</span>
                            <span>@{item.price}</span>
                            <span>{formattedTotalPrice}</span>
                        </div>
                </li>
            </div>
          
            
        </div>
        
      );
    })}
  </ul>
  
        )}
        <li className="flex justify-between items-center border-b pb-2">
                <span>Order Total</span>
                <span>${cartTotal}</span>
            </li>


      </div>
    </div>
  );
};

export default Home;



// {/* <button className="ml-4 text-custom-rose hover:text-black" onClick={() => removeFromCart(index)}>
//                                 X
//                             </button> */}