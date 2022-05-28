import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow from "./arrow.png";

interface IWinnerProps {}

const Winner: FC<IWinnerProps> = () => {

    const navigate = useNavigate();

    let getWinner: any = JSON.parse(localStorage.getItem("winners") as string);
    
    if(getWinner === null){
        navigate("/competitors")
    }

    const winners = getWinner.winners;
    let overtakings = getWinner.overtakings;

    let winner;

    if(overtakings){
        winner = winners;
        overtakings = overtakings.join(" || ");
    }else{
        winner = winners.join(" || ");
    }

    const removeWinner = () => {
        localStorage.removeItem("winners");
    }

    return (
        <React.Fragment>
            <section id="winnerContent">
                <header>
                    <Link onClick={removeWinner} id="backtohome" to={"/competitors"}> {">"}BACK TO COMPETITORS LIST PAGE</Link>
                </header>
                <div id="dataWinnerContainer">
                    <h1>WINNER/S</h1>
                    <img src={arrow} alt="arrowImg"></img>
                    <h5>{winner}</h5>
                </div>
                {overtakings !== undefined
                    ?                        
                    <div>
                        <hr />
                        <div>OVERTAKINGS</div> 
                        {overtakings}
                    </div>
                    :
                    null
                }
            </section>
            
        </React.Fragment>
    )
}

export default Winner;