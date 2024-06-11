import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import { Row } from 'react-bootstrap';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function ClickedObj() {
    const { actions, store } = useContext(Context)
   
    
    return <Card >
        <Card.Img keyvariant="top" src="holder.js/100px180" />
        <Card.Body>
            
            <Card.Text>
       
            </Card.Text>
            <Card.Text>
         
            </Card.Text>
            <Card.Text>


            </Card.Text>
        </Card.Body>
    </Card>




};

export default ClickedObj;