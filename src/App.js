import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TravelPlan from './components/TravelPlan';
import TravelPlanDetails from './components/TravelPlanDetails';
import image1 from "./assets/6.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/8.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/3.jpg";
import TourGuide from "./components/TourGuide";
import 'bootstrap/dist/css/bootstrap.min.css';
import GuideCardDetails from './components/GuideCardDetails';
import Details from "./Helper/Details";

function App() {
  // travel details

  const card=[
    {id:1,title:"pakage 1",destination:"Saint Martin",time:"From 19 jan TO 23 jan",hotel:"Event FEE:3950",image:image1},
  {id:2,title:"pakage 2",destination:"Sajek Vally",time:"2 days 3 night",hotel:"premimum hotel",image:image2},
  {id:3,title:"pakage 3",destination:"Kuakata",time:"2 days 3 night",hotel:"premimum hotel",image:image3},
  {id:4,title:"pakage 4",destination:"Lal bag Kella",time:"2 days 3 night",hotel:"premimum hotel",image:image4}]
  

  const Guidedata = [
     { id: "1", title: "Sajek", image: image1, details: <Details/> },
         { id: "2", title: "Kuakata", image: image2, details: <Details/> },
        { id: "3", title: "Kushtia", image: image3, details: <Details/> },
       { id: "4", title: "Sajeksdsf", image: image1, details:<Details/> },
        { id: "5", title: "Kuakata", image: image5, details: <Details/> },
         { id: "6", title: "Kushtia", image: image5, details: <Details/> }
   
]



  //returnn function
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/travelPlan" element={<TravelPlan card={card} key={card.id}/>}/>
        <Route path="/travelPlan/details/:id" element={<TravelPlanDetails/>}/>
        <Route path="/tourguide" element={<TourGuide/>}/>
        <Route path="/tourguide/details/:id" element={<GuideCardDetails data={Guidedata} key={Guidedata.id}/>}/>
        {/* <Route path="/demo" element={<DEmo/>}/> */}
      </Routes>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
