import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


function Cardinfovehicle() {
    const { actions, store } = useContext(Context)


    return <Card  >
        <Card.Img  keyvariant="top" src="holder.js/100px180" />
        <Card.Body>

            <Card.Text>
                Nombre: {store.clickedObjmoreinfo.name}
            </Card.Text>
                Descripcion: {store.clickedObj.description}
 
            <Card.Text>
                Capacidad de cargo: {store.clickedObj.properties.cargo_capacity}<br/>
                Consumibles: {store.clickedObj.properties.consumables}<br/>
                Costo en creditos: {store.clickedObj.properties.cost_in_credits}<br/>
                Tripulacion: {store.clickedObj.properties.crew}<br/>
                Largo: {store.clickedObj.properties.length}<br/>
                Creador: {store.clickedObj.properties.manufacturer}<br/>
                Modelo: {store.clickedObj.properties.model}<br/>
                Pasajeros: {store.clickedObj.properties.passengers}<br/>   
            </Card.Text>
            <Card.Text>


            </Card.Text>
        </Card.Body>
    </Card>




};

export default Cardinfovehicle;