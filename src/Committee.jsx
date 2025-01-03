import Header from "./Header.jsx";
import PresidentPhoto from "./images/WCPA_logo.png"
import TreasurerPhoto from "./images/WCPA_logo.png"
import SecetaryPhoto from "./images/WCPA_logo.png"
function Committee() {
    return (
      <div>
        <Header />
        <h2 className="text-3xl pt-4 text-orange-400 font-bold flex justify-center">2025 Wellington Canoe Polo Committee</h2>
        <div>
          <div className="flex flex-row justify-evenly py-10">
            <CommitteeMember name="Charles Irvine-Ford" position="President" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Micheal Bird" position="Treasure" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Kitt McEvoy" position="Secetary" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Kate McGrath" position="School Development" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
          </div>
          <div className="flex flex-row justify-evenly">
            <CommitteeMember name="Thomas McDermott" position="Squad Manager" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Josh Bird" position="Social League" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Adam Bird" position="Cant remember" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
            <CommitteeMember name="Jack Arcus" position="Gear Manager" photo={PresidentPhoto} email="wgtncanoepolo@gmail.com"/>
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
