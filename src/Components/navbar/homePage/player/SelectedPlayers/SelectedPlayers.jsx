import React from "react";
import Player from "../Player";
import { MdDelete } from "react-icons/md";
import { Fa0 } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const selectedPlayers = ({ selecredPlayers ,setSelecredPlayers,coin,setCoin}) => {
    const handleDeleteSelectedPlayer = (player)=>{
        console.log(selecredPlayers,"player");
        const filterdPlayers=selecredPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        setSelecredPlayers(filterdPlayers)
        setCoin(coin + player.price)
    }
  console.log(selecredPlayers);
  return (
    <div>
     <div className="space-y-5">
         {selecredPlayers.map((Player, ind) => {
        return (
          <div
            key={ind}
            className="flex justify-between items-center gap-6 p-10 rounded-2xl border"
          >
            <div className="flex items-center gap-6">
              <img
                src={Player.playerImage}
                alt={Player.playerName}
                className="w-20 h-auto rounded-md"
              />
              <div className="">
                <h2 className="flex  items-center gap-2 font-semibold text-xl">
                  <FaUser></FaUser> {Player.playerName}
                </h2>
                <p>{Player.playerType}</p>
              </div>
            </div>
            <button className="btn text-red-500" onClick={()=>handleDeleteSelectedPlayer(Player)}>
              <MdDelete />
            </button>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default selectedPlayers;
<h1>selected players</h1>;
