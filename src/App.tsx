import { PopupButton } from "react-calendly";
import dogPic from "./assets/dog.jpg";

import {Services} from "./components/services/Services";
import { Announcements } from "./components/announcements/Announcments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-200 p-4 gap-4">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold text-pink-600 tracking-wide mb-2 font-serif">
           Versace Nails <span className="inline-block animate-pulse">💅</span>
       </h1>
        <p className="font-semibold text-center text-lg md:text-xl text-gray-700 italic tracking-wider">
          Where <span className="text-pink-500">Elegance</span> Meets <span className="text-pink-500">Artistry</span>
        </p>
      
      {/* Introduction statement */}
      <div className="flex flex-col sm:flex-row bg-pink-50 w-full max-w-md p-2 rounded-lg">
        <div className="w-full sm:w-1/3 mb-2 sm:mb-0 flex justify-center items-center">
          <img className="rounded-md w-52 h-auto " src={dogPic} alt="" />
        </div>

        <div className="sm:pl-2 flex-1">
          <h2 className="text-lg font-semibold">Welcome to Versace Nails</h2>
          <p className="text-sm">
            Indulge in the ultimate nail care experience, where luxury and
            creativity blend seamlessly. At Versace Nails, we offer exquisite
            nail services that leave you feeling pampered and glamorous.
          </p>
        </div>
      </div>
      
      {/* Announcements, Rules, etc... */}
      <Announcements/>

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
      <Services />
      
      {/* {nailServices.map(({name, price, description}) => (
        <Services name={name} price={price} description={description}/>
      ))} */}
      {/* Social Media + appointment button  */}
      <Footer/>
    </div>
  );
}

export default App;