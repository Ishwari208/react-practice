
import {useState} from "react";
export default function LikeButton(){
   let[isLiked ,setIsLiked]=useState(false);
   let [click,setClicks]=useState(0);
   let toggleLike=()=>{
   setIsLiked(!isLiked);
   setClicks(click+1);
   }

   let likeStyle={color:"red"};



   return(
    //boolean veriables are by default not printed in react
    <div>
        <p>Clicks={click}</p>
        <p onClick={toggleLike}> 
            {
                isLiked ?(<i className="fa-solid fa-heart" style={likeStyle}></i>):(<i className="fa-regular fa-heart"></i>)
            }
         
            </p>
    </div>
   ) 
}