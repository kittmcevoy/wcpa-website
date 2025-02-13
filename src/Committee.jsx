import Header from "./Header.jsx";
import PresidentPhoto from "./images/WCPA_logo.png";
import TreasurerPhoto from "./images/WCPA_logo.png";
import SecretaryPhoto from "./images/WCPA_logo.png";
import SocialLeagueRepPhoto from "./images/Committee Photos/Social League Rep Photo.jpg";
import GearRepPhoto from "./images/Committee Photos/Gear Rep Photo.jpg";
import SchoolsRepPhoto from "./images/Committee Photos/Schools Rep Photo.JPG";
import SquadManagerPhoto from "./images/WCPA_logo.png";
import FundraisingManagerPhoto from "./images/WCPA_logo.png";
function Committee() {
    return (
      <div>
        <Header />
        <h2 className="text-3xl pt-4 text-orange-400 font-bold flex justify-center">2025 Wellington Canoe Polo Committee</h2>
        <div>
          <div className="flex flex-row justify-evenly py-10">
            <CommitteeMember name="Charles Irvine-Ford" position="President" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Micheal Bird" position="Treasure" photo={TreasurerPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Kitt McEvoy" position="Secretary" photo={SecretaryPhoto} email="wcpasecretary@gmail.com"/>
            <CommitteeMember name="Kate McGrath" position="School Development" photo={SchoolsRepPhoto} email="kate.mcgrath@outlook.com"/>
          </div>
          <div className="flex flex-row justify-evenly">
            <CommitteeMember name="Thomas McDermott" position="Squad Manager" photo={SquadManagerPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Josh Bird" position="Social League" photo={SocialLeagueRepPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Adam Bird" position="Gear Manager" photo={GearRepPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Jack Arcus" position="Fundraising Manager" photo={FundraisingManagerPhoto} email="wgtncanoepolo@gmail.com"/>
          </div>
        </div>
          
      </div>
    );
  }


  function CommitteeMember({name, position, photo, email }){
      return(
        <div className="flex flex-col justify-center max-w-48 xs:max-w-60">
          <a className="flex justify-center" href={`mailto:${email}`}>
            <img src={photo} alt={`${position} member`} className="h-40" />
          </a>
          <p className="text-2xl font-medium text-center">{name}</p>
          <p className="text-center text-xl">{position}</p>
        </div>
      );
  }

export default Committee;
