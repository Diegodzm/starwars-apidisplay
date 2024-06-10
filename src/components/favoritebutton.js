import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Button } from 'react-bootstrap';

function DropFav() {
    const { actions, store } = useContext(Context)

  
    const deleFav=(index)=>{
        actions.delFav(index)
       

    }
    return (
        <Dropdown className='d-flex justify-content-end'>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Favorites {store.favorites.length}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {store.favorites.map((product, index) => (<Dropdown >{product.name}<Button onClick={()=>{deleFav(index)}} className='d-inline-flex ms-4 btn-danger'>X</Button></Dropdown>
              ))}
            
            </Dropdown.Menu>
                 
        </Dropdown>
    );
}

export default DropFav;