import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import './cardplanet.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function CardPlanet() {
    const { actions, store } = useContext(Context)
 
    return <ScrollMenu className='filapersonajes '>
    {store.listOfplanets.map((product, index) => (
        <Card key={index} style={{ width: '18rem' }} className='mb-5'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    asdasdsadasd
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        ))}
    </ScrollMenu>

};

export default CardPlanet;