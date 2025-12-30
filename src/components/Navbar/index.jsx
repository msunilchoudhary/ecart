import Button from '@mui/material/Button'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
// import { IoCaretDownOutline } from "react-icons/io5";
import fashion from "../../assets/images/bikerfashion.webp";
import { useState } from 'react';

function Navbar() {
    const [isOpenCatLists, setIsOpenCatLists] = useState(false)
  return (
    <div className='navbar'>
        <div className="container">
            <div className="col-lg-3">
                <Button className='allCatBtn' onClick={()=> setIsOpenCatLists(!isOpenCatLists)}>
                    <BiCategory />
                    All Categories
                    <IoIosArrowDown />
                </Button>
                {isOpenCatLists === true && <div className="subcategories">
                    <div className="catList-wrap shadow-1">
                        <ul className='catLists'>
                            <li><Link to="/shop">Mobiles & Tablets</Link></li>
                            <li><Link to="/">Fashion <IoIosArrowForward /></Link>
                                <div className="category-submenu">
                                    <h4>Fashion</h4>
                                    <ul className='category-submenu-lists'>
                                        <li><Link to="/shop">Men Top wear</Link></li>
                                        <li><Link to="/shop">Men Bottom wear</Link></li>
                                        <li><Link to="/shop">Women Bottom Wear</Link></li>
                                        <li><Link to="/shop">Men Night wear</Link></li>
                                        <li><Link to="/shop">women Night wear</Link></li>
                                        <li><Link to="/shop">Men Summer wear</Link></li>
                                        <li><Link to="/shop">Women Summer wear</Link></li>
                                        <li><Link to="/shop">Men Winter wear</Link></li>
                                        <li><Link to="/shop">Women Winter wear</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/shop">Electronics</Link></li>
                            <li><Link to="/shop">home & Furnitures</Link></li>
                            <li><Link to="/shop">Grocery</Link></li>
                            <li><Link to="/shop">Beauty & Personal Care</Link></li>
                            <li><Link to="/shop">TVs & Appliances</Link></li>
                            <li><Link to="/shop">Jewellery & Accessories</Link></li>
                            <li><Link to="/shop">Books & stationaries</Link></li>
                            <li><Link to="/shop">Musical Instruments</Link></li>
                            <li><Link to="/shop">Pet Supplies</Link></li>
                            <li><Link to="/shop">Bags & Footwear</Link></li>
                            <li><Link to="/shop">Sports & Fitness</Link></li>
                            <li><Link to="/shop">Kids & Toys</Link></li>
                        </ul>
                    </div>
                </div>}
                
            </div>
            <div className="col-lg-9 position-inherit">
                <div className="menubar">
                    <ul className='menu-list'>
                        <li><Link to="/shop">Mobiles & Tablets</Link></li>
                        <li><Link to="/">Fashion <span><IoIosArrowDown /></span></Link>
                            <div className="dropdown-menu-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <h4>Men</h4>
                                            <ul className='submenu-list'>
                                                <li><Link to="/shop">Top Wear</Link></li>
                                                <li><Link to="/shop">Bottom Wear</Link></li>
                                                <li><Link to="/shop">Ethnic Wear</Link></li>
                                                <li><Link to="/shop">Innerwear</Link></li>
                                                <li><Link to="/shop">Sports Wear</Link></li>
                                                <li><Link to="/shop">Night Wear</Link></li>
                                                <li><Link to="/shop">Winter wear</Link></li>
                                                <li><Link to="/shop">combo Store</Link></li>
                                                <li><Link to="/shop">Accessories</Link></li>
                                                <li><Link to="/shop">Footwear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Women</h4>
                                            <ul className='submenu-list'>
                                                <li><Link to="/shop">Sarees</Link></li>
                                                <li><Link to="/shop">Kurtis</Link></li>
                                                <li><Link to="/shop">Kurta Sets</Link></li>
                                                <li><Link to="/shop">Dupatta Sets</Link></li>
                                                <li><Link to="/shop">Suits & Dress Material</Link></li>
                                                <li><Link to="/shop">Lehengas</Link></li>
                                                <li><Link to="/shop">Blouses</Link></li>
                                                <li><Link to="/shop">Gowns</Link></li>
                                                <li><Link to="/shop">Jeans & Jeggings</Link></li>
                                                <li><Link to="/shop">Palazzos & Leggings</Link></li>
                                                <li><Link to="/shop">Trousers & Pants</Link></li>
                                                <li><Link to="/shop">wintter wear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Kids</h4>
                                            <ul className='submenu-list'>
                                                <li><Link to="/shop">Top wears</Link></li>
                                                <li><Link to="/shop">Bottom wears</Link></li>
                                                <li><Link to="/shop">Jeans</Link></li>
                                                <li><Link to="/shop">Night Wears</Link></li>
                                                <li><Link to="/shop">Summer Wear</Link></li>
                                                <li><Link to="/shop">Winter Wear</Link></li>
                                                <li><Link to="/shop">Shoes</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link to="/"><img src={fashion} alt="Fashion" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/shop">Electronics</Link></li>
                        <li><Link to="/shop">home & Furnitures</Link></li>
                        <li><Link to="/shop">Grocery</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar