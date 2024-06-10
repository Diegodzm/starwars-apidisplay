import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardPeople from "../components/cardpeople";
import CardPlanet from "../components/cardplanet";
import CardVehicles from "../components/cardvehicle";
import { Container } from "react-bootstrap";

const Home = () => {

    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
        
    }, []);
    return (
        <Container className="ms-4 mt-5">
              <CardPeople ></CardPeople>
              <CardPlanet></CardPlanet>
              <CardVehicles></CardVehicles>
        </Container>
      
      );

}


export default Home