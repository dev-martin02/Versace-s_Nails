import { PopupButton } from "react-calendly";
import nailLogo from "./assets/nails_logo.jpg";

import { Services } from "./components/services/Services";
import { Announcements } from "./components/announcements/Announcments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-200 p-4 gap-4">
      {/* <h1 className="text-3xl md:text-5xl text-center font-extrabold text-pink-600 tracking-wide mb-2 font-serif">
           Versace Nails <span className="inline-block animate-pulse">💅</span>
       </h1>
        <p className="font-semibold text-center text-lg md:text-xl text-gray-700 italic tracking-wider">
          Where <span className="text-pink-500">Elegance</span> Meets <span className="text-pink-500">Artistry</span>
        </p> */}

      {/* Introduction statement */}
      <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-auto object-contain"
            src={nailLogo} // Make sure this path is correct
            alt="Versace Nails"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/20 to-transparent">
          <h2 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
            Versace Nails
          </h2>
        </div>
      </div>

      {/* Announcements, Rules, etc... */}
      <Announcements />

      <Services />

      {/* Book an appointment */}
      <div className="bg-pink-50 w-full max-w-md p-4 rounded-lg">
        <p className="font-semibold text-center">
          Elevate your style with stunning nails. Book now.
        </p>
        <PopupButton
          url="https://calendly.com/martinmorel03"
          rootElement={document.getElementById("root") as HTMLElement}
          className="btn bg-orange-200 hover:bg-orange-100 border-none my-3 w-full"
          text="Book an appointment!!"
        />
      </div>
      {/* Social Media + appointment button  */}
      <Footer />
    </div>
  );
}

export default App;
