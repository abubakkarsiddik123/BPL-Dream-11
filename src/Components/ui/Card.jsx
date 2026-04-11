import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player, setCoin,coin }) => {
  const [selectedPlayers, setSelectedPlayers] = useState(false);
  const handleChoosePlayers = () => {
    let newCoin=coin-player.price;
    if(newCoin>=0){
      setCoin(coin-player.price)
    }else{
      alert("Not enough coin to purches this player")
      return;
    }
    alert(`${player.playerName} is selected`)
    setSelectedPlayers(true)
  };
  return (
    <div className="card bg-base-100  shadow-sm hover:shadow-lg hover:scale-[1.02] transition">
      <figure>
        <img src={player.playerImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser></FaUser> {player.playerName}
        </h2>
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2 items-center">
            <FaFlag></FaFlag>
            <p>{player.playerCountry} </p>
          </div>
          <button className="btn ">{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">Rating: ({player.rating}) </h2>
        <div className="flex justify-between items-center gap-4 font-bold">
          <p>{player.batingStyle} </p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price} </p>
          <button className="btn" onClick={handleChoosePlayers} disabled={selectedPlayers}>
            {selectedPlayers ? "Selected" : "Choose Player"}
            
          </button>
          {/* <button
                    className="btn"
                    onClick={() => {{
                      if (!selectedPlayers.includes(player.id)) {
                        setSelectedPlayers([...selectedPlayers, player.id]);
                      }
                      handleChoosePlayers()}
                    }}
                    disabled={selectedPlayers.includes(player.id)}
                  >
                    {selectedPlayers.includes(player.id)
                      ? "Selected"
                      : "Choose Player"}
                  </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
