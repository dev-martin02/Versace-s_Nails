import { useState } from "react"
import { PopupButton } from "react-calendly"
import Carousel from "../../hook/Carousel";

//images 
import image1 from '../../assets/short_nails/image1.jpg';
import image2 from '../../assets/short_nails/image2.jpg';
import image3 from '../../assets/short_nails/image3.jpg';

export default function Services(){

    const [displaySection, setDisplaySection] = useState(false)
    const imagePaths = [image1, image2, image3];


    return(
        <div className="bg-pink-50 w-full max-w-md p-4 rounded-lg">
            <h2 className=" font-semibold text-2xl">Services</h2>
            <div>
                <div className="flex justify-between">
                    <h3>Short Nails</h3>
                    <span onClick={() => setDisplaySection(!displaySection)}>Expand</span>
                </div>
                { displaySection && 
                    <div>
                        <Carousel images={imagePaths}/>
                        <p>Starting at <span className="font-bold">$35</span> </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ratione natus voluptatibus ducimus voluptatum esse repellendus itaque consequatur labore accusamus. Ullam error incidunt corporis numquam vel vero? Dolor, porro ea?</p>
                        <PopupButton
                            url="https://calendly.com/martinmorel03"
                            rootElement={document.getElementById("root") as HTMLElement}
                            className="btn bg-blue-200 hover:bg-blue-100 border-none my-3"
                            text="Book an appointment!"
                            />
                    </div> }
            </div>
        </div>
    )
}