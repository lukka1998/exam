import React from 'react'
import image from "../../../assets/Group 15.svg"
function BackCard({ formData }) {
    return (
      <div style={{ display:"flex" , flexDirection:"column" , gap:"30px" ,justifyContent:"center" ,alignItems:"center" ,marginLeft:"200px" , width: "447px", height: "245px", flexShrink: 0, padding:"10px" , borderRadius: "10px", background: "linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%)" }}>
              <div style={{ width: "447px", height: "54px", flexShrink: 0, background: "#2F2F2F"}}>

              </div>
              <div style={{ display:"flex" ,alignItems:"center", justifyContent:"flex-end",  padding:"10px 20px" ,color:"white" ,width: "361px", height: "38px", flexShrink: 0, borderRadius: "4px", background: "#ADB5BE" }}>
              <p>Date: {formData.number3}</p>
              </div>
              <div>
                <img src={image} alt="" />
              </div>

        
      </div>
    )
  }

export default BackCard
