import React from 'react'
import './Body.css'
import Dropdown from '../Dropdown/Dropdown'

const Body = () => {
  return (
    <div className="body-class">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-side">
              <h1>Hospital Registration Form</h1>
              {/* <p>Register your hospital with us and get all the benefits of our platform. We provide a platform where you can manage your hospital and patients with ease.</p> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-side">
              <form className="form-main">
                <div className="form-group">
                  {/* <label htmlFor="hospital-name">Hospital Name</label>  */}
                  <input type="text" className="form-control" id="hospital-name" placeholder="Hospital Name*" /> 
          
                </div>
                <div className="form-group">
                  {/* <label htmlFor="hospital-email">Hospital Email</label> */}
                  <input type="text" className="form-control" id="hospital-email" placeholder="Branch Name*" />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="hospital-password">Hospital Password</label> */}
                  <input type="text" className="form-control" id="hospital-password" placeholder="Zip Code" />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="hospital-address">Hospital Address</label> */}
                  <input type="email" className="form-control" id="hospital-address" placeholder="Hospital Email Address*" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body