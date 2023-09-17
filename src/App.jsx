import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Shoppingcart from './components/shoppingcart/shoppingcart'

function App() {
  const [shoppingcart, setShoppingcart] = useState([]);
  const [creditTime, setCreditTime] = useState('0');
  const [price, setPrice] = useState('0');
  const [remaining, setRemaining] = useState('20');

  if(remaining === 0){
    alert('you should have enough remaining credit hours to add more course.')
  }

  const handleAddToShoppingcart = blog =>{
    if (parseInt(remaining) >= parseInt(blog.Credit)) {
    // add course title on cart 
    const newShoppingcart = [...shoppingcart, blog];
    setShoppingcart(newShoppingcart);

    // total credit time 
    const time = blog.Credit;
    const newCreditTime = parseInt(creditTime) + parseInt(time);
    setCreditTime(newCreditTime);

    // total price 
    const currentPrice = blog.Price;
    const newPrice = parseInt(price) + parseInt(currentPrice);
    setPrice(newPrice);

    // Remaining time
    const currentRemanining = blog.Credit;
    const newRemaining = parseInt(remaining) - parseInt(currentRemanining);
    setRemaining(newRemaining);
    }
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center text-[#1C1B1B] pt-12 pb-8'>Course Registration</h1>
      <div className='md:flex w-[1440px] mx-auto gap-6'>
        <Blogs 
          handleAddToShoppingcart={handleAddToShoppingcart}
          remaining={remaining}
          ></Blogs>
        <Shoppingcart 
          shoppingcart={shoppingcart} 
          creditTime={creditTime}
          price={price}
          remaining={remaining}
        ></Shoppingcart>
      </div>
    </>
  )
}

export default App;
