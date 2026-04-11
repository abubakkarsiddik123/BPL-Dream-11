
import Card from "../../../../ui/Card";

const AvailablePlayers = ({ players ,setCoin,coin ,selecredPlayers,setSelecredPlayers}) => {
  return (
  <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          return (
               <Card key={player.id} player={player} coin={coin} setCoin={setCoin} selecredPlayers={selecredPlayers} setSelecredPlayers={setSelecredPlayers} ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
