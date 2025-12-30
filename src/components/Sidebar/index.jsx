import Button from "@mui/material/Button";
import { colors } from "../../data/data";
import Checkbox from "../Checkbox";
// import MinMaxSlider from "../MinMaxSlider";
import RangeSlider from 'react-range-slider-input';
import { useState } from "react";
import { BiRupee } from "react-icons/bi";

function Sidebar() {
    const [priceValue, setPriceValue] = useState([100, 60000]);
    const [priceValue2, setPriceValue2] = useState(0);
    
    const categories = [
      {name:"Mobiles & Tablets", total:30,},
      {name:"Fashion", total:200},
      {name:"Electronics", total:54},
      {name:"Home & Furnitures", total:231},
      {name:"Grocery", total:32},
      {name:"Beauty & Personal Care", total:20},
      {name:"TVs & Appliances", total:13},
      {name:"Jewellery & Accessories", total:23},
      {name:"Books & stationaries", total:32},
      {name:"Musical Instruments", total:11},
      {name:"Sports & Fitnes", total:53},
      {name:"Kids & Toys", total:132},
    ];
    const brands = [
      {name:"Bata", total:21,},
      {name:"Reebok", total:200},
      {name:"Adidas", total:54},
      {name:"LEVI'S", total:231},
      {name:"FLYING MACHINE", total:32},
      {name:"Pepe Jeans", total:20},
      {name:"Spykar", total:13},
      {name:"Roadster", total:23},
      {name:"Aadhya designers", total:32},
      {name:"AB ENTERPRISE", total:11},
      {name:"Aamish fashion", total:53},
      {name:"Belizs", total:132},
    ];
  return (
    <div  className='sidebar'>
        <div className="filter-container">
            <h2>Shop By</h2>
            <div className="filter-box">
                <h3>Price</h3>
                <RangeSlider value={priceValue} onInput={setPriceValue} min={100} max={60000} step={5} />
                <div className="priceRange d-flex justify-content-between pt-2">
                    <span>From: <strong><BiRupee />{priceValue[0]}</strong></span>
                    <span>To: <strong><BiRupee />{priceValue[1]}</strong></span>
                </div>
            </div>

            <div className="filter-box">
                <h3>Category</h3>
                <ul className='checkbox-lists'>
                    {categories.map((category, i) =>(
                        <li key={"category_" + i}>                        
                            <Checkbox item={category.name} idText="category_" index={i} />
                            <span className="total">({category.total})</span>
                        </li>
                    ))}
                                        
                </ul>
            </div>
            
            <div className="filter-box">
                <h3>Colours</h3>
                
                <div className="color-lists">
                    {colors.map((color, i) => (
                        <Button key={i} className="d-flex align-items-center">
                            <span className="color-round" style={{backgroundColor:color.code}}></span>
                            <span>{color.name}</span>
                        </Button>
                    ))}
                </div>
                
            </div>

            <div className="filter-box">
                <h3>Brands</h3>
                <ul className='checkbox-lists'>
                    {brands.map((brand, i) =>(
                        <li key={"category_" + i}>                        
                            <Checkbox item={brand.name} idText="category_" index={i} />
                            <span className="total">({brand.total})</span>
                        </li>
                    ))}
                                        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar