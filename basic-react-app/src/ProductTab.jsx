import Product from "./Product";
function ProductTab(){
    // let features=["hi-tech","durable","fast"];
    return<>
    <Product title="Phone" price={30000}  />
    <Product title="Laptop" price={40000}/>
    <Product title="Tab" price={300000}/>
    </>
}
export default ProductTab;