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
        <h1 className="text-xl py-4 text-orange-400">Welcome to Wellington Canoe Polo Association</h1>
      </div>

      <div className="flex flex-row justify-around">

        <div>
          <PhotoCarousel photos={photosList} />
        </div>

        <div>
          Create an about thing
        </div>

        <div>
          <table class="table-auto w-30 border-collapse border border-gray-300">
            <tbody>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">President</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">Charles Irvine-Ford</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">wgtncanoepolo@gmail.com</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>



    </div>
  );
}

export default homepage;