import React from 'react';
import { joueurs } from './Players';
import Player from './Player';

function PlayersLists() {
    console.log('---------------------------------------',joueurs)
    const flexContainerStyle = {
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between", 
        flexWrap: "wrap", 
      };
    return (
        <div style={flexContainerStyle}>
            {joueurs.map(joueurs => (
                <Player key={joueurs} joueurs={joueurs} />
            ))}
        </div>
    );
}

export default PlayersLists;