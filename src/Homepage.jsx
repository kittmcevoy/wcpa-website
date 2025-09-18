import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PhotoCarousel from "./PhotoCarousel.jsx";
import photo1 from "./images/HomePagePhotos/photo_1.jpg"
import photo2 from "./images/HomePagePhotos/photo_2.jpg"
import photo3 from "./images/HomePagePhotos/photo_3.jpg"
import photo4 from "./images/HomePagePhotos/photo_4.jpg"

export default function homepage() {
  const photosList = [photo1, photo2, photo3, photo4];

  return (
    <div className="flex flex-col overflow-hidden w-full pt-36">

      <Header />

      <PhotoCarousel photos={photosList} />

      <div className="m-10 text-lg"> 
        <div className="flex text-gray-700 justify-center text-center my-4 text-3xl">
          Welcome to Wellington Canoe Polo Association
        </div>

        <div className="flex text-gray-700 justify-center text-center my-2">
          At the Wellington Canoe Polo Association (WCPA), we are all about fun on the water and building a great community around the sport we love. 
        </div>

        <div className="flex text-gray-700 justify-center text-center my-2">
          Whether you’re brand new to canoe polo or a seasoned player, young or young at heart, you’ll find a place here. 
        </div>

        <div className="flex text-gray-700 justify-center text-center my-2">
          Our mission is simple: to grow and support canoe polo at every level across Wellington—helping people develop their skills, make friends, and enjoy the game.
        </div>
      </div>

      <div>

        <div className="bg-gray-700 text-white justify-center p-10">
        
          <div className="text-white text-3xl flex justify-center"> What is Canoe Polo? </div>

          <div className="flex m-10 text-lg">
            Canoe polo (also known as kayak polo) is a fast-paced water sport that combines elements of kayaking, basketball, and water polo. Played in teams of five, the game involves passing a ball and scoring goals in nets suspended above the water at each end of the pitch. Players use specially designed kayaks and paddles to move, block, and compete for possession, making it a thrilling mix of skill, strategy, and teamwork. Whether you're new to the sport or a seasoned paddler, canoe polo offers a fun and challenging way to get active on the water.
          </div>

        </div>
       
      </div>

      <Footer />
    
    </div>
  );
}
