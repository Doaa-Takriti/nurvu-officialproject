import React,{useState} from 'react'
import Data from "../Data.json"

const ChoosePackage = () => {
    const [selectedOption2, setSelectedOption2] = useState('');




    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
        console.log(event.target.value)
      };
  return (
    <div className="col-lg-6">
    <div className="select-plan-sec">
    <div className="radio-buttons">
        {Data.price.map(item => {
            return(
                <label className="custom-radio" key={item.id}>
<input           onChange={handleOptionChange2}
type="radio" name="radio" value={item.value} id={item.value} defaultChecked={item.defaultChecked} />
<span className="radio-btn">
<div>
<i className="fa fa-circle-check"></i>
</div>
<div className="hobbies-icon">
<p>{item.desc}</p>
<span className="offer-det">{item.day}</span>
</div>
<div className="price-sec">
<p>{item.price}</p>
</div>
</span>
</label>

            )
        })}

</div>
        
    </div>
</div>
  )
}

export default ChoosePackage