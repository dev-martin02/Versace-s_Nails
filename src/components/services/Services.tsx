import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import Carousel from "../../hook/Carousel";
//images
import image1 from "../../assets/short_nails/image1.jpg";
import image2 from "../../assets/short_nails/image2.jpg";
import image3 from "../../assets/short_nails/image3.jpg";
import { nailServices } from "../../util/serviceData";

export const Services = () => {
  const [expandedServices, setExpandedServices] = useState<
    Record<string, boolean>
  >({});
  const imagePaths = [image1, image2, image3];

  function toggleService(name: string) {
    console.log(expandedServices);
    setExpandedServices((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }
  useEffect(() => {
    if (nailServices.length > 0) {
      setExpandedServices({ [nailServices[0].name]: true });
    }
  }, []);

  return (
    <div className="bg-pink-50 w-full max-w-md p-4 rounded-lg">
      <h2 className="font-semibold text-2xl">Services</h2>
      <ul className="mt-5">
        {nailServices.map(({ name, price, description }, index) => (
          <li
            key={index}
            className="mt-1 py-3 border-b border-gray-200 last:border-0"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">{name}</h3>
              <button
                className="px-3 py-0 bg-pink-100 text-pink-700 font-medium text-sm border border-pink-300 hover:bg-pink-200 hover:border-pink-400 active:bg-pink-300 active:border-pink-500 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 shadow-sm rounded-md"
                onClick={() => toggleService(name)}
              >
                {expandedServices[name] ? "-" : "+"}
              </button>
            </div>
            {expandedServices[name] && (
              <div className="mt-6">
                <Carousel images={imagePaths} />
                <p className="my-2 px-4 py-2 rounded-lg inline-block bg-rose-100 ">
                  Starting at <span className="font-bold">${price}</span>
                </p>
                <p>{description}</p>
                <PopupButton
                  url="https://calendly.com/martinmorel03"
                  rootElement={document.getElementById("root") as HTMLElement}
                  className="btn bg-blue-200 hover:bg-blue-100 border-none my-3"
                  text="Book an appointment!"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
