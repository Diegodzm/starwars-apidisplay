import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import './cardplanet.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";

function CardPlanet() {
    const { actions, store } = useContext(Context)

    const addfavorite=(product)=>{
        actions.appendFav(product)
   
    }
    const navigate= useNavigate()

       return <ScrollMenu className='filapersonajes '>
    {store.listOfplanets.map((obj, index) => (
        <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>
                    asdasdsadasd
                </Card.Text>
                <Button onClick={()=>{actions.objinfo(obj).then(response => { if(response){ navigate("/infoplanet") } })}} variant="primary">go</Button>
                <Button onClick={()=>{addfavorite(obj)}} className='mx-1 btn-warning'>add favorite</Button>
            </Card.Body>
        </Card>
        ))}
    </ScrollMenu>

};

export default CardPlanet;