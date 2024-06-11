import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function CardinfoPlanet() {
    const { actions, store } = useContext(Context)


    return <Card >
        <Card.Img keyvariant="top" src="holder.js/100px180" />
        <Card.Body>

            <Card.Text>
                Nombre: {store.clickedObjmoreinfo.name}
            </Card.Text>
                Descripcion: {store.clickedObj.description}
 
            <Card.Text>
                Clima: {store.clickedObj.properties.climate}<br/>
                Diametro: {store.clickedObj.properties.diameter}<br/>
                Gravedad: {store.clickedObj.properties.gravity}<br/>
                Periodo orbital: {store.clickedObj.properties.orbital_period}<br/>
                Poblacion: {store.clickedObj.properties.population}<br/>
                Periodo de rotacion: {store.clickedObj.properties.rotation_period}<br/>
                Terreno: {store.clickedObj.properties.terrain}<br/>
                Agua en la superficie: {store.clickedObj.properties.surface_water}<br/>   
            </Card.Text>
            <Card.Text>


            </Card.Text>
        </Card.Body>
    </Card>




};

export default CardinfoPlanet;