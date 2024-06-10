import { Context } from "../store/context"
import { useContext, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardPeople from "../components/cardpeople";
import CardPlanet from "../components/cardplanet";
import CardVehicles from "../components/cardvehicle";
import DropFav from "../components/favoritebutton";
import { Container } from "react-bootstrap";
import "./home.css"
import Image from"../Star_Wars_Logo.svg.png"

const Home = () => {

    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
        
    }, []);
    return (
        <div className="body">
            
            <img src={Image} alt="my image" ></img>
            <DropFav></DropFav> 
            <h1 className="text-light ">Characters</h1>
              <CardPeople ></CardPeople>
            <h1 className="text-light mt-5">Planets</h1>
              <CardPlanet></CardPlanet>
              <h1 className="text-light mt-5">Vehicles</h1>
              <CardVehicles></CardVehicles>
        </div>
      
      );

}


export default Home