import Button from "@mui/material/Button";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import Search from "../Search";
import { useMemo, useState } from "react";
import { States } from "../../data/data";

function LocationDropdown() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stateName, setStateName] = useState("Delhi");
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStates  = useMemo(() => {
    if(!searchQuery) return States;
    return States.filter((state) => state.toLowerCase().includes(searchQuery.toLowerCase()))
  },[searchQuery])

  const handleSelectState = (name) => {
    setStateName(name)
    setIsOpenModal(false)
  }

  

  return (
    <>
      <Button className="country-dropdown d-flex justify-content-between" onClick={()=> setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span>Your Location</span>
          <div>{stateName}</div>
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
              {filteredStates.map((state, index) => <li key={index}><Button onClick={()=> handleSelectState(state)} className={`${stateName === state ? "active" : ""}`}>{state}</Button></li>)}              
            </ul>
          </div>
        </div>        
      </Dialog>
    </>
  );
}

export default LocationDropdown;
