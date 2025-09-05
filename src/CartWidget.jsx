import  './CartWidget.css' 
export default function CartWidget() {
    return (
        <span className="cartcontainer">
        <img className="basketimg" src="/basket.png" alt="cart"></img>
        <div>0</div>
        </span>)   
}