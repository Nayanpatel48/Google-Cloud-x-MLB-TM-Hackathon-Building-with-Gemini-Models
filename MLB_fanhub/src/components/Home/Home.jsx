import React, { useState, useEffect } from "react";
import Card from "../Cards/Card";

function LuckyDraw() {
  const teamData = {
    ARI: { name: "Arizona Diamondbacks", url: "https://www.mlb.com/dbacks", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Arizona_Diamondbacks_logo_teal.svg/800px-Arizona_Diamondbacks_logo_teal.svg.png"},
    ATL: { name: "Atlanta Braves", url: "https://www.mlb.com/braves", img:"https://images.ctfassets.net/iiozhi00a8lc/t144_header_primaryATL_LOGO_092019_svg/7c2f3d4d1f352fc7162dd9c765693d4d/t144_header_primary.svg" },
    BAL: { name: "Baltimore Orioles", url: "https://www.mlb.com/orioles", img:"https://images.ctfassets.net/iiozhi00a8lc/t110_header_primary110_svg/f5b66eef0580ea5f0bc0ad5285f8d0fa/t110_header_primary.svg"  },
    BOS: { name: "Boston Red Sox", url: "https://www.mlb.com/redsox", img:"https://images.ctfassets.net/iiozhi00a8lc/t111_header_primarybos_primart_header_logo_svg/2b1d10de1b49920faed03084da22b2b7/t111_header_primary.svg"  },
    CHC: { name: "Chicago Cubs", url: "https://www.mlb.com/cubs", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/112.svg"  },
    CIN: { name: "Cincinnati Reds", url: "https://www.mlb.com/reds", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/113.svg"  },
    CLE: { name: "Cleveland Guardians", url: "https://www.mlb.com/guardians", img:"https://images.ctfassets.net/iiozhi00a8lc/2tLb91Y8LBZIemHAqP2IWN/e6468955f23715256557e75c01f9f61a/ClevelandMonogram.svg"  },
    COL: { name: "Colorado Rockies", url: "https://www.mlb.com/rockies", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/115.svg"  },
    CWS: { name: "Chicago White Sox", url: "https://www.mlb.com/whitesox", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/145.svg"  },
    DET: { name: "Detroit Tigers", url: "https://www.mlb.com/tigers" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/116.svg" },
    HOU: { name: "Houston Astros", url: "https://www.mlb.com/astros", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/117.svg"  },
    KC: { name: "Kansas City Royals", url: "https://www.mlb.com/royals", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/118.svg"  },
    LAA: { name: "Los Angeles Angels", url: "https://www.mlb.com/angels" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/108.svg" }, 
    LAD: { name: "Los Angeles Dodgers", url: "https://www.mlb.com/dodgers" , img:"https://images.ctfassets.net/iiozhi00a8lc/t119_header_primary119_wordmark_on_dark_svg/0d7c22af3db6cb3984368595627001e3/t119_header_primary.svg" },
    MIA: { name: "Miami Marlins", url: "https://www.mlb.com/marlins", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/146.svg"  },
    MIL: { name: "Milwaukee Brewers", url: "https://www.mlb.com/brewers", img:"https://images.ctfassets.net/iiozhi00a8lc/t158_header_primarycap_on_dark_svg/6091a9cdc75a6738fc4a261d9ec33454/t158_header_primary.svg"  },
    MIN: { name: "Minnesota Twins", url: "https://www.mlb.com/twins", img:"https://images.ctfassets.net/iiozhi00a8lc/t142_header_primaryMN_TC_19_blue_svg/c0f95eb9469a7d98b24498395d4f4dc9/MIN23_Dark_Active.svg"  },
    NYM: { name: "New York Mets", url: "https://www.mlb.com/mets" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/121.svg" },
    NYY: { name: "New York Yankees", url: "https://www.mlb.com/yankees", img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"  },
    OAK: { name: "Oakland Athletics", url: "https://www.mlb.com/athletics" , img:"https://images.ctfassets.net/iiozhi00a8lc/6pTfb3rol9EuujxQMapyVn/e58bc760571f353a06ae8fb8ccb31c40/133_gold.svg" },
    PHI: { name: "Philadelphia Phillies", url: "https://www.mlb.com/phillies" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/143.svg" },
    PIT: { name: "Pittsburgh Pirates", url: "https://www.mlb.com/pirates" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/134.svg" },
    SD: { name: "San Diego Padres", url: "https://www.mlb.com/padres" , img:"https://images.ctfassets.net/iiozhi00a8lc/t135_header_primarySD_Logo_Brown_svg/ce24e1097b05f8a221dd71c662b7e816/t135_header_primary.svg" },
    SEA: { name: "Seattle Mariners", url: "https://www.mlb.com/mariners" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/136.svg" },
    SF: { name: "San Francisco Giants", url: "https://www.mlb.com/giants" , img:"https://images.ctfassets.net/iiozhi00a8lc/6iFthXVHvcIkl6M3MXsYrz/d37031845422b150a40ada06d5d0d197/t137-primary-logo2021.svg" },
    STL: { name: "St. Louis Cardinals", url: "https://www.mlb.com/cardinals" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/138.svg" },
    TB: { name: "Tampa Bay Rays", url: "https://www.mlb.com/rays" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/139.svg" },
    TEX: { name: "Texas Rangers", url: "https://www.mlb.com/rangers" , img:"https://images.ctfassets.net/iiozhi00a8lc/6HSwMP9twv0hrrHVF4Nyo0/0f0063a3fb5f029ac4dadd420b1f1142/140.svg" },
    TOR: { name: "Toronto Blue Jays", url: "https://www.mlb.com/bluejays" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/141.svg" },
    WSH: { name: "Washington Nationals", url: "https://www.mlb.com/nationals" , img:"https://www.mlbstatic.com/team-logos/team-cap-on-dark/120.svg" },
  };
  
  
    const [remainingTeams, setRemainingTeams] = useState(Object.keys(teamData));
    const [drawnTeams, setDrawnTeams] = useState([]);
  
    const drawTeam = () => {
      if (remainingTeams.length === 0) {
        alert("All teams have been drawn!");
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * remainingTeams.length);
      const drawnTeamAbbr = remainingTeams[randomIndex];
      const drawnTeam = teamData[drawnTeamAbbr]; // Get team data
  
      setDrawnTeams([...drawnTeams, drawnTeam]);
      setRemainingTeams(remainingTeams.filter((team, index) => index !== randomIndex));
    };
  
    const resetDraw = () => {
      setDrawnTeams([]);
      setRemainingTeams(Object.keys(teamData));
    };
  
    const infoClicked = () => {
      console.log("info is clicked");
    };
  
  return (
    <div className="container mx-auto p-4">
      
      {" "}
      {/* Added container and padding */}
      <h1 className="text-white text-3xl font-bold mb-4">
        MLB Lucky Draw
      </h1>{" "}
      {/* Styled heading */}
      <div className="flex space-x-4 mb-4">
        {" "}
        {/* Button group */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {" "}
        {/* Grid for lists */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">
            Drawn Teams:
          </h2>{" "}
          {/* Styled heading */}
          <ul className="text-white list-disc pl-5">
            {" "}
            {/* Styled list */}
            {drawnTeams.map((team, index) => (
              <>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
                  <img
                    class="rounded-t-lg"
                    src={team.img}
                    alt=""
                  />
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {team.name}
                      </h5>
                    </a>
                    <a
                      href={team.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">
            Remaining Teams:
          </h2>{" "}
          {/* Styled heading */}
          <ul className="text-white list-disc pl-5">
            {" "}
            {/* Styled list */}
            {remainingTeams.map((team, index) => (
              <li key={index}>{team}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LuckyDraw;
