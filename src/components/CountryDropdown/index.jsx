
import Button from '@mui/material/Button'
import { MdKeyboardArrowDown } from "react-icons/md";

function CountryDropdown() {
  return (
    <Button className="country-dropdown d-flex justify-content-between">
        <div className="info d-flex flex-column">
            <span>Your Location</span>
            <div>India</div>
        </div>
        <MdKeyboardArrowDown />
    </Button>
  )
}

export default CountryDropdown