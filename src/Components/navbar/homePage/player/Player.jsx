import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Player = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedBtn, setSelectedBtn] = useState(true);
  const [selecredPlayers,setSelecredPlayers]=useState([])
  // console.log(playersPromise);
  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-between gap-4 items-center mb-5">
        {selectedBtn ? (
          <h2 className="text-3xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-3xl font-bold">Selected Player ({selecredPlayers.length}/{players.length})</h2>
        )}
        <div className="">
          <button
            onClick={() => setSelectedBtn(true)}
            className={`btn ${selectedBtn ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedBtn(!true)}
            className={`btn  ${selectedBtn ? "" : "bg-[#E7FE29]"} rounded-l-none rounded-r-xl `}
          >
            Selected ({selecredPlayers.length})
          </button>
        </div>
      </div>
      {selectedBtn ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          setSelecredPlayers={setSelecredPlayers}
          selecredPlayers={selecredPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers selecredPlayers={selecredPlayers} setSelecredPlayers={setSelecredPlayers}   coin={coin}
          setCoin={setCoin}></SelectedPlayers>
      )}
    </div>
  );
};

export default Player;
