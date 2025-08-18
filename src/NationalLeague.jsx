import Header from "./Header.jsx";

function NationalLeague() {

  const KnightsTeam = ["Thomas McDermott", "Kitt McEvoy", "Luke Gray", "John Flitcroft", "", "Charles Irvine-Ford", "Josh Bird", "Canon Larsen (C)"];  
  const PaladinsTeam = ["Zoe Dunbar", "Jack Arcus", "Corban James", "Jacob Holmes", "Zander Galloway (C)", "Adam Bird", "Matthew Hollows"]; 
  const QueensTeam = ["Zoe Dunbar (C)", "Madi Brown", "Crystal Payne", "Olivia Kirby", "Sarah Stevenson", "Ella Greogory"]; 
  return (
      <div>
        <Header />
        <h2 className="text-3xl pt-4 text-orange-400 font-bold flex justify-center">National League</h2>

        <div className="flex flex-col justify-center m-10">
          <p className="text-gray-800 pb-2"> 
            This year, Wellington Canoe Polo is excited to announce that it will be entering three competitive teams into New Zealand's National Canoe Polo League. 
            The teams include two Open B grade teams and one Women’s B grade team. 
            These teams will represent Wellington on the national stage, showcasing the region's talent and commitment to the sport.
          </p>
          <p>
            National League Canoe Polo is a prestigious competition in New Zealand, bringing together the best canoe polo teams from across the country.             It serves as the premier national platform for canoe polo players to compete at a high level, with teams battling it out in different grades, including Open, Women’s, and Age-Grade categories. 
            The league is not only a chance for athletes to demonstrate their skill and teamwork, but it also fosters community engagement and the development of the sport at both a competitive and recreational level.
          </p>
        </div>



        <p>Congrats to all </p>
        <div> 
          <div className="flex justify-around">
            <TeamList TeamName="Knights - Open B grade" PlayerList={KnightsTeam} Coach="Kaylie"/>
            <TeamList TeamName="Paladins - Open B grade" PlayerList={PaladinsTeam} Coach="Jason Chan"/>
            <TeamList TeamName="Queens - Womens B grade" PlayerList={QueensTeam} Coach="Kaylie"/>
          </div>
        </div>
        
        
      </div>
       
    );
  }

  function TeamList({TeamName, PlayerList, Coach}) {
    return (
      <div>
        <p className="font-bold text-gray-400 py-2">{TeamName}</p>
        {
          PlayerList.map((name, index) => (
            name !== "" && (
              <p className="text-orange-400" key={index+1}>{index+1}. {name}</p>
            )
          ))
        }
        <p>Coach: {Coach}</p>
      </div>
    );
  }


export default NationalLeague;