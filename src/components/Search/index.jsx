import Button from '@mui/material/Button'
import { IoIosSearch } from "react-icons/io";

function Search({placeholder, searchItem}) {
  return (
    <div className='search-wrap'>
        <div className="form-group m-0 d-flex">
            <input name='searchBy' placeholder={placeholder} type="text" className="form-control" onChange={searchItem} />
            <Button className='d-flex'>
                <IoIosSearch />
            </Button>
        </div>
    </div>
  )
}

export default Search