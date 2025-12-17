import Button from '@mui/material/Button'
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div className='search-wrap'>
        <div className="form-group m-0 d-flex">
            <input name='searchBy' placeholder='Search By Category, product etc.' type="text" className="form-control" />
            <Button className='d-flex'>
                <IoIosSearch />
            </Button>
        </div>
    </div>
  )
}

export default Search