import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-ecart.png";
import Search from "../Search";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import Navbar from "../Navbar";
import LocationDropdown from "../LocationDropdown";


function Header() {
    return(
        <>
            <div className="header">
                <div className="top-strip">
                    <div className="container">
                        <div className="col-xs-12 text-center">
                            adadda
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-2">
                                <Link to="/" className="logo">
                                    <img src={logo} alt="eCart" />
                                </Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center justify-content-between">
                                <LocationDropdown />
                                <Search placeholder="Search By Category, product etc." />
                                <div className="right-part d-flex justify-content-between align-items-center">
                                    <Link to="/signIn" className="user-btn">
                                        <FiUser />
                                    </Link>
                                    <Link to="/" className="wishlist-btn relative">
                                        <FaRegHeart />
                                        <span className="badge">0</span>
                                    </Link>
                                    <Link to="/cart" className="cart-btn relative">
                                        <BsCart2 />
                                        <span className="badge">0</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
    
}

export default Header