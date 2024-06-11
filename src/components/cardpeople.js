import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import './cardpeople.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Link } from 'react-router-dom';

function CardPeople() {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        console.log(store.listOfpeople)

    }, []);
    const addfavorite=(product)=>{
        actions.appendFav(product)
   
    }
    return <ScrollMenu className='filapersonajes '>
    {store.listOfpeople.map((obj, index) => (
        <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>
                    asdasdsadasd
                </Card.Text>
               <Link className="text-white"to={"/info"}> <Button onClick={()=>{actions.objinfo(obj)}} variant="primary">go</Button></Link>
                <Button  onClick={()=>{addfavorite(obj)}}  className='mx-1 btn-warning'>add favorite</Button>
            </Card.Body>
        </Card>
        ))}
    </ScrollMenu>

};

export default CardPeople;