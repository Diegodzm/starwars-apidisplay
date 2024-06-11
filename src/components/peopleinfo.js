import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function CardinfoPeople() {
    const { actions, store } = useContext(Context)
   
    
    return <Card >
        <Card.Img keyvariant="top" src="holder.js/100px180" />
        <Card.Body>
            
            <Card.Text>
               Nombre: {store.clickedObjmoreinfo.name}       
            </Card.Text>
                Descripcion: {store.clickedObj.description}
            <Card.Text>
                Altura: {store.clickedObj.properties.height} cm<br/>
                Nacimiento: {store.clickedObj.properties.birth_year}<br/>
                Color de pelo: {store.clickedObj.properties.hair_color}<br/>
                Masa: {store.clickedObj.properties.mass} kg<br/>
                Color de piel: {store.clickedObj.properties.skin_color}<br/>
            </Card.Text>
            <Card.Text>


            </Card.Text>
        </Card.Body>
    </Card>




};

export default CardinfoPeople;