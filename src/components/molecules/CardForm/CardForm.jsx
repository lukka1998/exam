// CardForm.jsx
import React from "react";

function CardForm({ formData, setFormData }) {
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    if (name === "number" && !/^\d*$/.test(value)) {
        return; // Ignore non-numeric input
      }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  return (
    <form style={{display:"flex" ,flexDirection:"column" ,gap:"20px"}}>
    
        <input style={{padding:"10px", border:"1px solid blue" , borderRadius:"10px"}}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="User Name"

        />
        <input style={{padding:"10px", border:"1px solid blue" , borderRadius:"10px"}}
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="e.g. 1234 5678 9123 0000"
        />
      
        
        <div style={{display:"flex"}}>
            <input style={{padding:"10px", border:"1px solid blue" , borderRadius:"10px"}}
            type="text"
            name="number1"
            value={formData.number1}
            onChange={handleChange}
            placeholder="MM"
            />
            <input style={{padding:"10px", border:"1px solid blue" , borderRadius:"10px"}}
            type="text"
            name="number2"
            value={formData.number2}
            onChange={handleChange}
            placeholder="YY"
            /> 
            <input style={{padding:"10px", border:"1px solid blue" , borderRadius:"10px"}}
            type="text"
            name="number3"
            value={formData.number3}
            onChange={handleChange}
            placeholder="e.g. 123"
            />
        </div>
        <button style={{  color:"white" , fontWeight:"bold" , width:  "481px", height: "53px", flexShrink: 0, borderRadius: "8px", background: "var(--Deep-Violet, #21092F)" }}>Confirm</button>
    </form>
  );
}

export default CardForm;
