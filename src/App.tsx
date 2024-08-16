import { PopupButton } from "react-calendly";
import dogPic from "./assets/dog.jpg";
import ingIcon from "./assets/instagram.svg";
import whatIcon from "./assets/whatsapp.svg";
import gmailIcon from "./assets/gmail.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-200 p-4 gap-4">
      <h1 className="text-2xl md:text-4xl text-center">Versace Nails 💅</h1>
      <p className="font-semibold text-center">Where Elegance Meets Artistry</p>
      
      {/* Introduction statement */}
      <div className="flex bg-pink-50 w-full max-w-md p-1 rounded-lg">
        <div className="w-67">
          <img className="rounded-md object-cover h-full" src={dogPic} alt="" />
        </div>
        <div className="p-2">
          <h2 className="text-md">Welcome to Versace Nails</h2>
          <p className="text-sm">
            Indulge in the ultimate nail care experience, where luxury and
            creativity blend seamlessly. At Versace Nails, we offer exquisite
            nail services that leave you feeling pampered and glamorous.
          </p>
        </div>
      </div>
      
      {/* Announcements, Rules, etc... */}
      <div className="p-4 bg-pink-50 rounded-lg flex flex-col gap-6 w-full max-w-md">
        <div>
          <h3 className="font-semibold">🌟 Why Choose Versace Nails?</h3>
          <ul className="list-disc pl-5">
            <li>Personalized Services: Tailored treatments to suit your style.</li>
            <li>Luxurious Environment: Relax in our elegant and hygienic salon.</li>
            <li>Top-Quality Products: Only the best for your nails.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">✨ Book Your Appointment Today</h3>
          <p>
            Select from our range of bespoke nail treatments, from classic
            manicures to intricate nail art, all tailored to your unique style.
            With our easy online booking system, securing your spot has never
            been simpler.
          </p>
        </div>
      </div>
      
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
      <div className="flex flex-col gap-2 bg-pink-50 p-4 rounded-lg w-full max-w-md">
        <h3 className="font-semibold">📞 Contact Us</h3>
        <p>Have questions? We're here to help!</p>
        <div className="flex gap-4 mt-2 justify-center">
          <span className="w-7">
            <img src={ingIcon} className="w-full" alt="instagramIcon" />
          </span>
          <span className="w-7">
            <img src={whatIcon} className="w-full" alt="whatsappIcon" />
          </span>
          <span className="w-7">
            <img src={gmailIcon} className="w-full" alt="gmailIcon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;