import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({players}) => {
    return (
       <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
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
                  <button className="btn">Choose Player</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default Card;