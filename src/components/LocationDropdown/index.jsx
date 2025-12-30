import Button from "@mui/material/Button";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import Search from "../Search";
import { useContext, } from "react";
import { AppContext } from "../../App";

function LocationDropdown() {
  const{selectedLocation, setSelectedLocation, filteredStates, isOpenModal, setIsOpenModal, setSearchQuery} = useContext(AppContext)
 
  const handleSelectState = (name) => {
    setSelectedLocation(name)
    setIsOpenModal(false)
  }

  

  return (
    <>
      <Button className="country-dropdown d-flex justify-content-between" onClick={()=> setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span>Your Location</span>
          <div>{selectedLocation}</div>
        </div>
        <MdKeyboardArrowDown />
      </Button>

      <Dialog open={isOpenModal} onClose={()=> setIsOpenModal(false)}>
        <div className="location-box">
          <h3>Choose Your Delivery Location</h3>
          <span className="text-sm">Enter your address and we will specify the offer for your area</span>
          <Button className="modal-close-btn" onClick={()=> setIsOpenModal(false)}><MdClose /></Button>
          <Search placeholder="Search your area" searchItem={(e) => setSearchQuery(e.target.value)} />

          <div className="location-lists">
            <ul>
              {filteredStates.map((state, index) => <li key={index}><Button onClick={()=> handleSelectState(state)} className={`${selectedLocation === state ? "active" : ""}`}>{state}</Button></li>)}              
            </ul>
          </div>
        </div>        
      </Dialog>
    </>
  );
}

export default LocationDropdown;
