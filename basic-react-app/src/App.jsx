import "./App.css"
import Title from "./Title";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";

function Description(){
  return <h3>I am the Discription</h3>;
}



function App() {//function is our app component
 


   return (
    <div>
      <LudoBoard/>
      {/* <LikeButton/> */}
   
    {/* <MsgBox userName="Ishwari" textColor="pink"/>
     <ProductTab/> */}
    </div>

   );
   //jo bhi return hora becomes our ui
  //page pe dikhayi dega

  

}

export default App
