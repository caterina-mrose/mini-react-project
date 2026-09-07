import { useState } from "react";

interface Player {
  name: string;
  score: number;
}

function Game() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 10 },
    { name: "Player 2", score: 8 },
  ]);
  const updateScore = (player: Player) => {
    setPlayers(
      players.map((p) =>
        p.name == player.name ? { ...p, score: p.score + 1 } : p,
      ),
    );
  };
  const formatPlayers = (players: Player[]) => {
    return players.map((player) => (
      <li key={player.name} onClick={() => updateScore(player)}>
        {player.name} {player.score}
      </li>
    ));
  };
  return (
    <div>
      <ul>{formatPlayers(players)}</ul>
    </div>
  );
}

export default Game;
