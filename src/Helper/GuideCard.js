import React from 'react';

import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import image from "../assets/10.jpg";
import "./guideCard.css"
const GuideCard = ({data}) => {
    const cardData  = Object.values(data);
    console.log(cardData)
    return (
        <div>
            <div className='d-flex'>
                {
                    cardData.map((data)=>{
                        return <NavLink to={`/tourguide/details/${data.id}`} className="navlinkCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                   {data.details}
                                </Card.Text>
                                
                                <button className="guideCardBtn">Go somewhere</button>
                            </Card.Body>
                        </Card>
                        </NavLink>
                    })
                }
            {/* <NavLink to="/tourguide/details" className="navlinkCard">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                            <button className="guideCardBtn">Go somewhere</button>
                        </Card.Body>
                    </Card>
                    </NavLink>
                    <NavLink to="/tourguide/details" className="navlinkCard">
                    <Card style={{ width: '18rem',marginLeft:"25px" }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <NavLink to="/tourguide/details">
                            <button className="guideCardBtn">Go somewhere</button></NavLink>
                        </Card.Body>
                    </Card>
                    </NavLink>
                    <NavLink to="/tourguide/details" className="navlinkCard">
                    <Card style={{ width: '18rem',marginLeft:"25px" }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <NavLink to="/tourguide/details">
                            <button className="guideCardBtn">Go somewhere</button></NavLink>
                        </Card.Body>
                    </Card>
                    </NavLink> */}
                    </div>
        </div>
    );
};

export default GuideCard;