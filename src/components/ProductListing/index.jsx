import React from "react";
import proImg1 from "../../assets/images/casual-fashion.webp";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Quantity from '../Quantity';
import { BiRupee } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import Button from "@mui/material/Button";

function ProductListing() {
  return (
    <div className="cart-lists">
      <table class="table table-striped table-bordered">
        <thead class="table-info">
          <tr>
            <th width="5%" scope="col" className="text-center">#</th>
            <th width="42%" scope="col">Product</th>
            <th width="15%" scope="col" className="text-center">Unit Price</th>
            <th width="14%" scope="col" className="text-center">Quantity</th>
            <th width="14%" scope="col" className="text-center">Subtotal</th>
            <th width="10%" scope="col" className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-center">1</th>
            <td>
                <Link to="/" className="product-infos">
                    <div className="pro-img">
                        <img src={proImg1} alt="" />
                    </div>
                    <div className="pro-title">
                        <h2>Men Solid Round Neck Polyester Pink T-Shirt</h2>
                        <Rating name="text-feedback" className='rating' value="4.5" readOnly precision={0.5} size='small'/>
                    </div>
                </Link>
            </td>
            <td>
                <div className="product-sum d-flex align-items-center justify-content-end">
                    <BiRupee /><span>219.00</span>
                </div>
            </td>
            <td>
                <Quantity />
            </td>
            <td>
                <div className="product-sum d-flex align-items-center justify-content-end">
                    <BiRupee /><span>219.00</span>
                </div>
            </td>
            <td align="center">
              <Button className="remove-btn text-danger"><FaTimesCircle /></Button>
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-center">2</th>
            <td>
                <Link to="/" className="product-infos">
                    <div className="pro-img">
                        <img src={proImg1} alt="" />
                    </div>
                    <div className="pro-title">
                        <h2>Men Solid Round Neck Polyester Pink T-Shirt</h2>
                        <Rating name="text-feedback" className='rating' value="4.5" readOnly precision={0.5} size='small'/>
                    </div>
                </Link>
            </td>
            <td>
                <div className="product-sum d-flex align-items-center justify-content-end">
                    <BiRupee /><span>219.00</span>
                </div>
            </td>
            <td>
                <Quantity />
            </td>
            <td>
                <div className="product-sum d-flex align-items-center justify-content-end">
                    <BiRupee /><span>219.00</span>
                </div>
            </td>
            <td align="center">
              <Button className="remove-btn text-danger"><FaTimesCircle /></Button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <div className="coupon-box">
                <input type="text" className="coupon-control" placeholder="Enter your coupon code" />
                <Button>Apply</Button>
              </div>
            </td>
            <td colSpan="2">
              <div className="update-btn">
                <Button>Update Cart</Button>
              </div>              
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ProductListing;
