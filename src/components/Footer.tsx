import ingIcon from "../assets/instagram.svg";
import whatIcon from "../assets/whatsapp.svg";
import gmailIcon from "../assets/gmail.svg";

export default function Footer(){
    return(
        <div className="flex flex-col gap-2 bg-pink-50 p-4 rounded-lg w-full max-w-md">
        <h3 className="font-semibold">📞 Contact Us</h3>
        <p>Have questions? We're here to help!</p>
        <div className="flex gap-4 mt-2 ">
          <span className="w-8">
            <img src={ingIcon} className="w-full" alt="instagramIcon" />
          </span>
          <span className="w-8">
            <img src={whatIcon} className="w-full" alt="whatsappIcon" />
          </span>
          <span className="w-8">
            <img src={gmailIcon} className="w-full" alt="gmailIcon" />
          </span>
        </div>
      </div>
    )
}