import React,{useState} from 'react'

const BoxPlan = () => {
    const [selectedOption, setSelectedOption] = useState('Monthly');



    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      console.log(event.target.value)
    };
  return (
    <div className="col-lg-6 price-det-box">
    <div className="price-det-sec">
        
        <div className="price-det">
            <div className="radio-sec">
                <div className="radio_container">
                <label           className={selectedOption === 'Monthly' ? 'activeradio' : ''}
>
<input
type="radio"
name="option"
value="Monthly"
checked={selectedOption === 'Monthly'}
onChange={handleOptionChange}
hidden
/>
Monthly
</label>

<label         className={selectedOption === 'year' ? 'activeradio' : ''}>
<input
type="radio"
name="option"
value="year"
checked={selectedOption === 'year'}
onChange={handleOptionChange}
hidden


/>
year
</label>


                    
                </div>
            </div>
            <ul className="free " id="free">
                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-xmark outlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-xmark outlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-xmark outlist"></i>
                </li>
            </ul>
            <ul className="basic selectt">
                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-xmark outlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-xmark outlist"></i>
                </li>
            </ul>

            <ul className="premium selectt">
                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-xmark outlist"></i>
                </li>
            </ul>

            <ul className="enterprice selectt">
                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>

                <li className="options">
                    <p>Option 1</p>
                    <i className="fa-solid fa-circle-check inlist"></i>
                </li>
            </ul>

            <button className="btn plan-choose-btn">Choose plan</button>
        </div>
    </div>
</div>
  )
}

export default React.memo(BoxPlan)