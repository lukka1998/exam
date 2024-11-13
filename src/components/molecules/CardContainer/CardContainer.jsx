import {React , useState} from 'react'
import FrontCard from '../../atoms/FrontCard/FrontCard'
import BackCard from '../../atoms/BackCard/BackCard'
import CardForm from '../CardForm/CardForm'
function CardContainer() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    number1: "",
    number2:"",
    number3:"",

  });

  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"center" ,alignItems:"center"}}>
      <div>
      <FrontCard formData={formData} />
      <BackCard formData={formData} />
      </div>
    
      <CardForm formData={formData} setFormData={setFormData} />

    </div>
  );
}


export default CardContainer
