import Cart from "../cart/cart";

const Shoppingcart = ({shoppingcart, creditTime, price, remaining}) => {
    
    return (
        <div className="md:w-1/4 bg-white p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remaining} hr</h3>
            <hr />
            <h2 className='text-xl font-bold text-[#1C1B1B]'>Course Name</h2>
            <ol className="list-decimal list-inside mt-5">
            {
                shoppingcart.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </ol>
            <hr />
            <p className="font-medium text-[#1C1B1BCC]">Total Credit Hour : {creditTime}</p>
            <hr />
            <p className="font-medium text-[#1C1B1BCC]">Total Price : {price} USD</p>
        </div>
    )
}

export default Shoppingcart;