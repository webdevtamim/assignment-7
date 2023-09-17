const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <li className="text-[#1C1B1B99] leading-7">{title}</li>
    )
}

export default Cart;