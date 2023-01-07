import Carousel from 'react-bootstrap/Carousel';
import GuideCard from '../Helper/GuideCard';

import "./tourGuide.css";
import Navbar from "./Navbar";
import image1 from "../assets/6.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/1.jpg";
import image5 from "../assets/4.jpg";

function TourGuide() {
    const data = [
        {
            card1: { id: "1", title: "Sajek", image: image1, details: "Some quick example text to build on the card title and make up the" },
            card2: { id: "2", title: "Kuakata", image: image2, details: "Some quick example text to build on the card title and make up the" },
            card3: { id: "3", title: "Kushtia", image: image3, details: "Some quick example text to build on the card title and make up the" }
        },
        {
            card1: { id: "4", title: "Sajeksdsf", image: image1, details: "Some quick example text to build on the card title and make up the" },
            card2: { id: "5", title: "Kuakata", image: image5, details: "Some quick example text to build on the card title and make up the" },
            card3: { id: "6", title: "Kushtia", image: image5, details: "Some quick example text to build on the card title and make up the" }
        }
    ]
    return (
        <div className='GuidcardSection'>
            
                
           
            <Navbar />
            <div className='WithCard'>
                <Carousel variant='dark'>
                    {
                        data.map((data) => {
                            return <Carousel.Item>
                                <GuideCard data={data} />
                            </Carousel.Item>
                        })
                    }
                </Carousel>
            </div>
        </div>
       
    );
}

export default TourGuide;