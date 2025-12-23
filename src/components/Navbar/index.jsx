import Button from '@mui/material/Button'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
// import { IoCaretDownOutline } from "react-icons/io5";
import fashion from "../../assets/images/bikerfashion.webp";
import { useState } from 'react';

function Navbar() {
    const [isOpenCatLists, setIsOpenCatLists] = useState(true)
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
                            <li><Link to="/">Mobiles & Tablets</Link></li>
                            <li><Link to="/">Fashion <IoIosArrowForward /></Link>
                                <div className="category-submenu">
                                    <h4>Fashion</h4>
                                    <ul className='category-submenu-lists'>
                                        <li><Link to="/">Men Top wear</Link></li>
                                        <li><Link to="/">Men Bottom wear</Link></li>
                                        <li><Link to="/">Women Bottom Wear</Link></li>
                                        <li><Link to="/">Men Night wear</Link></li>
                                        <li><Link to="/">women Night wear</Link></li>
                                        <li><Link to="/">Men Summer wear</Link></li>
                                        <li><Link to="/">Women Summer wear</Link></li>
                                        <li><Link to="/">Men Winter wear</Link></li>
                                        <li><Link to="/">Women Winter wear</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/">Electronics</Link></li>
                            <li><Link to="/">home & Furnitures</Link></li>
                            <li><Link to="/">Grocery</Link></li>
                            <li><Link to="/">Beauty & Personal Care</Link></li>
                            <li><Link to="/">TVs & Appliances</Link></li>
                            <li><Link to="/">Jewellery & Accessories</Link></li>
                            <li><Link to="/">Books & stationaries</Link></li>
                            <li><Link to="/">Musical Instruments</Link></li>
                            <li><Link to="/">Pet Supplies</Link></li>
                            <li><Link to="/">Bags & Footwear</Link></li>
                            <li><Link to="/">Sports & Fitness</Link></li>
                            <li><Link to="/">Kids & Toys</Link></li>
                        </ul>
                    </div>
                </div>}
                
            </div>
            <div className="col-lg-9 position-inherit">
                <div className="menubar">
                    <ul className='menu-list'>
                        <li><Link to="/">Mobiles & Tablets</Link></li>
                        <li><Link to="/">Fashion <span><IoIosArrowDown /></span></Link>
                            <div className="dropdown-menu-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <h4>Men</h4>
                                            <ul className='submenu-list'>
                                                <li><Link>Top Wear</Link></li>
                                                <li><Link>Bottom Wear</Link></li>
                                                <li><Link>Ethnic Wear</Link></li>
                                                <li><Link>Innerwear</Link></li>
                                                <li><Link>Sports Wear</Link></li>
                                                <li><Link>Night Wear</Link></li>
                                                <li><Link>Winter wear</Link></li>
                                                <li><Link>combo Store</Link></li>
                                                <li><Link>Accessories</Link></li>
                                                <li><Link>Footwear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Women</h4>
                                            <ul className='submenu-list'>
                                                <li><Link>Sarees</Link></li>
                                                <li><Link>Kurtis</Link></li>
                                                <li><Link>Kurta Sets</Link></li>
                                                <li><Link>Dupatta Sets</Link></li>
                                                <li><Link>Suits & Dress Material</Link></li>
                                                <li><Link>Lehengas</Link></li>
                                                <li><Link>Blouses</Link></li>
                                                <li><Link>Gowns</Link></li>
                                                <li><Link>Jeans & Jeggings</Link></li>
                                                <li><Link>Palazzos & Leggings</Link></li>
                                                <li><Link>Trousers & Pants</Link></li>
                                                <li><Link>wintter wear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Kids</h4>
                                            <ul className='submenu-list'>
                                                <li><Link>Top wears</Link></li>
                                                <li><Link>Bottom wears</Link></li>
                                                <li><Link>Jeans</Link></li>
                                                <li><Link>Night Wears</Link></li>
                                                <li><Link>Summer Wear</Link></li>
                                                <li><Link>Winter Wear</Link></li>
                                                <li><Link>Shoes</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link to="/"><img src={fashion} alt="Fashion" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/">Electronics</Link></li>
                        <li><Link to="/">home & Furnitures</Link></li>
                        <li><Link to="/">Grocery</Link></li>
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