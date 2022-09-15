import { SwipeableDrawer } from '@mui/material'
import React, {useState, useEffect} from 'react'
import "./TinderCards.css"
import axios from "./axios";
import TinderCard from "react-tinder-card"
function TinderCards() {
    const [person, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData(){
          const req=await axios.get("/tinder/cards");

          setPeople(req.data);
        }
        fetchData();
    }, []);
    const swiped=(direction, nametoDelete) => {
        console.log("removing:" + nametoDelete);
    }
    const outOfFrame=(name) =>{
        console.log(name+ "left the screen");
    };
  return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {person.map((person) =>( 
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}

                >
                    <div 
                      style={{ backgroundImage: "url("+ person.imgUrl +")" }}
                      className="card"
                    >
                      <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards