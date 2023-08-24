import React,{useState} from 'react'

const Formcontact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        company:''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Firstname:', formData.firstname);
        console.log('Lastname:', formData.lastname);
        console.log('Email:', formData.email);
        console.log('Mobile:', formData.mobile);
        // Additional logic to handle form submission
      };
  return (
    <div className="col-lg-6 demo-form-sec">
                <form className="form-box" action="" onSubmit={handleSubmit}>
             
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="input-sec">
                                <input type="text"   name="firstname"
                                   value={formData.firstname}
                                   onChange={handleInputChange} className="input-box effect" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-sec">
                                <input type="text"
                                  name="lastname"
                                  value={formData.lastname}
                                  onChange={handleInputChange}className="input-box effect" placeholder="last Name" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-sec">
                                <input    name="email"
          value={formData.email}
          onChange={handleInputChange} type="email" className="input-box effect" placeholder="Business Email" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-sec">
                                <input
                                 name="mobile"
                                 value={formData.mobile}
                                 onChange={handleInputChange}
                                 type="tel" className="input-box effect" placeholder="Mobile no" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-sec">
                                <input  name="company"
          value={formData.company}
          onChange={handleInputChange} type="text" className="input-box effect" placeholder="Company" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <input type="submit" value="Get demo" className="demo-submit-btn" />
                        </div>

                        <div className="col-lg-12">
                            <p className="or-title">Or</p>
                            <a className="btn gmail-login-btn">
                               <img src="assest/gmail-logo.png" alt="" /> 
                               Login With Gmail
                            </a>
                        </div>
                    </div>
                    
                </form>
            </div>
  )
}

export default Formcontact