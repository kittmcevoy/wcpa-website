import Header from "./Header.jsx";
import PhotoCarousel from "./PhotoCarousel.jsx";
import photo1 from "./images/HomePagePhotos/photo_1.jpg"
import photo2 from "./images/HomePagePhotos/photo_2.jpg"
import photo3 from "./images/HomePagePhotos/photo_3.jpg"
import photo4 from "./images/HomePagePhotos/photo_4.jpg"

function homepage() {
  const photosList = [photo1, photo2, photo3, photo4];

  return (
    <div>

      <Header />
      <div className="flex justify-center">
        <h2 className="text-3xl py-4 text-orange-400 font-bold flex justify-center">Welcome to Wellington Canoe Polo Association</h2>
      </div>

      <div className="flex flex-row justify-around">

        <div>
          <PhotoCarousel photos={photosList} />
        </div>

        <div>
          Create an about thing
        </div>

        

      </div>



    </div>
  );
}

export default homepage;