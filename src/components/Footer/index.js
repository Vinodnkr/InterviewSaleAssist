import {FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai'

import {BiPhoneCall} from 'react-icons/bi'

import './index.css'

function Footer() {
  return (
    <div>
      <div className="contact-section" id="contactSection">
        <div className="contact-container">
          <div className="col-md-2 col-lg-1 order-md-0 hide">
            <img
              src="https://res.cloudinary.com/dyixrm8rs/image/upload/v1696877135/passport_photo_vinod_muzjxp.jpg"
              className="contact-img"
              width="65"
              height="65"
              alt="profilePic"
            />
          </div>

          <div className=" hide">
            <h4>Vinod Kumar</h4>
            <p>MERN stack Developer</p>
          </div>

          <div className=" hide">
            <h4>Phone No.</h4>

            <a href="tel:+919444344276">+91-9444344276</a>
          </div>

          <div className="hide">
            <h4>E-mail</h4>
            <a href="mailto:vinodtgv@gmail.com">vinodtgv@gmail.com</a>
          </div>

          <div className="hide">
            <h4>Address</h4>
            <FaMapMarkerAlt className="fa-icon pr-2" />
            India
          </div>

          <div className="mobile-show">
            <AiFillLinkedin className="fa-icon fa1" />

            <AiFillGithub className="fa-icon fa1" />

            <AiOutlineMail className="fa-icon fa1" />

            <BiPhoneCall className="fa-icon fa1" />
          </div>
        </div>
      </div>

      <div className="bottom-container pt-4">
        <div className="d-flex flex-column justify-content-center text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="pt-2 footer-decleration">
                  <AiOutlineCopyrightCircle className="fa-icon pr-2" />
                  2023 by Vinod Kumar, All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
