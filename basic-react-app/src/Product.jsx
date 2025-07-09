import './Product.css';
function Product({title,price,features}){
 let isDiscount = price>30000;
let styles={backgroundColor: isDiscount ? "pink":""};
   return (
    <div className="Product" style={styles}>
        
        <h3>{title}</h3>
        <h5>Price:{price}</h5>
        {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
      {price>30000 &&<p>Discount:5%</p>}
    </div>

   ) ;
}
export default Product;