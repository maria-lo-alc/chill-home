import './Item.css' 
import {Link} from 'react-router'  
function Item ({ id, title, img, price, description, imgalt }) {
    return ( <div className= "item-card"> 
    <img className="item-card-img" src={img} alt={imgalt}  />
    <h3 className="item-card-title">{title}</h3>
    <p className="item-card-price">{price}</p> 
    <p style={{ fontSize: "12px", opacity: "0.6"}}>{description}</p>
    <Link to={`/detail/${id}`}>
    <button className="item-card-button">Ver detalle</button>
    </Link>
    
    </div>
    )  
}
export default Item; 