import React from 'react'
import image from "../../../assets/Group 8.png"

function FrontCard({ formData }) {
  return (
    <div style={{ display:"flex" ,flexDirection:"column" , padding:"10px" , justifyContent:"center", alignItems:"flex-start", width: "447px", height: "245px", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(164deg, #6348FE 4.74%, #610595 88.83%)"  }}>
      <img src={image} alt="" />
      <p>SERIAL NUMBER: {formData.number}</p>
      <div style ={{ width:"100%" , display:"flex" ,justifyContent:"space-around" }}>
      <p>NAME:{formData.name}</p>
      <p>MM/YY : {formData.number1}/{formData.number2}</p>
      </div>
    </div>
  );
}

export default FrontCard;



