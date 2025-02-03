import React, { useState, useEffect } from 'react';

function LuckyDraw() {
    const [teams, setTeams] = useState([
        "ARI", "ATL", "BAL", "BOS", "CHC", "CIN", "CLE", "COL", "CWS", "DET",
        "HOU", "KC", "LAA", "LAD", "MIA", "MIL", "MIN", "NYM", "NYY", "OAK",
        "PHI", "PIT", "SD", "SEA", "SF", "STL", "TB", "TEX", "TOR", "WSH"
    ]); // MLB Team Abbreviations
    
    const [drawnTeams, setDrawnTeams] = useState([]);
    const [remainingTeams, setRemainingTeams] = useState([...teams]); // Start with all teams
    
    const drawTeam = () => {
        if (remainingTeams.length === 0) {
          alert("All teams have been drawn!");
          return;
        }
    
        const randomIndex = Math.floor(Math.random() * remainingTeams.length);
        const drawnTeam = remainingTeams[randomIndex];
    
        // spread syntax (...drawnTeams) creates a new array containing all the existing teams in 
        // drawnTeams, and then the drawnTeam is added to the end of this new array.
        setDrawnTeams([...drawnTeams, drawnTeam]);

        
        setRemainingTeams(remainingTeams.filter((team, index) => index !== randomIndex));
    };
    
    const resetDraw = () => {
        setDrawnTeams([]);
        setRemainingTeams([...teams]);
    };
      
  return (
    <div className="container mx-auto p-4"> {/* Added container and padding */}
      <h1 className="text-white text-3xl font-bold mb-4">MLB Lucky Draw</h1> {/* Styled heading */}

      <div className="flex space-x-4 mb-4"> {/* Button group */}
        <button
          onClick={drawTeam}
          disabled={remainingTeams.length === 0}
          className="text-white bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded disabled:bg-gray-500" // Tailwind styles
        >
          Draw a Team
        </button>
        <button
          onClick={resetDraw}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" // Tailwind styles
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for lists */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Drawn Teams:</h2> {/* Styled heading */}
          <ul className="text-white list-disc pl-5"> {/* Styled list */}
            {drawnTeams.map((team, index) => (
              <li key={index}>{team}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Remaining Teams:</h2> {/* Styled heading */}
          <ul className="text-white list-disc pl-5"> {/* Styled list */}
            {remainingTeams.map((team, index) => (
              <li  key={index}>{team}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LuckyDraw;