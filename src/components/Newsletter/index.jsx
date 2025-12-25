import Button from "@mui/material/Button"
import { FaRegEnvelope } from "react-icons/fa6"

function Newsletter() {
  return (
    <div className="section">
        <div className="container">
          <div className="newsletter">
            <div className="newsletter-wrap">
              <div className="section-title">
                <p>30% discount for your first order</p>
                <h2>Join our newsletter and get...</h2>
                <p>Join our email subscription now to get updates on promotions and coupons.</p>
              </div>
              <div className="newsletter-box">
                <span className='icon'><FaRegEnvelope /></span>
                <input type="text" placeholder='Your email address' />
                <Button> Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Newsletter