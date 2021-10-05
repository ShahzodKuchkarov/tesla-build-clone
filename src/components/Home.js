import React, { useState, useEffect } from 'react';
import { Main } from '../Style/Home';
import HomeCard from '../Containers/HomeCard';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Footer from '../components/Footer';

function Home() {


    const [dotPosition, setDotPosition] = useState('right');




    return (
        <Main>
            <div className="home">

                <Carousel dotPosition={dotPosition}>
                    <div className="carousel__item">
                        <HomeCard className="model_s"
                            model="Model S"
                            info="Order Online for"
                            link="Touchless Delivery"
                            view="Custom Order"
                            inventory="Existing Inventory"
                            inventory__link=""
                            view__link=""
                        />
                    </div>
                    <div>
                        <HomeCard className="model_y"
                            model="Model Y"
                            info="Order Online for"
                            link="Touchless Delivery"
                            view="Custom Order"
                            inventory="Existing Inventory"
                            inventory__link=""
                            view__link=""
                        />
                    </div>

                    <div>
                        <HomeCard className="model_3"
                            model="Model 3"
                            info="Order Online for"
                            link="Touchless Delivery"
                            view="Custom Order"
                            inventory="Existing Inventory"
                            inventory__link=""
                            view__link=""
                        />
                    </div>
                    <div>
                        <HomeCard className="model_x"
                            model="Model X"
                            info="Order Online for"
                            link="Touchless Delivery"
                            view="Custom Order"
                            inventory="Existing Inventory"
                            inventory__link=""
                            view__link=""
                        />
                    </div>

                    <div>
                        <HomeCard className="solar_panels"
                            model="Solar Panels"
                            info="Lowest Cost Solar Panels in America"
                            view="Order Now"
                            inventory="Learn More"
                            inventory__link=""
                            view__link=""
                        />
                    </div>
                    <div>
                        <HomeCard className="solar_roof"
                            model="Solar Roof"
                            info="Produce Clean Energy From Your Roof"
                            view="Order Now"
                            inventory="Learn More"
                            inventory__link=""
                            view__link=""
                        />
                    </div>
                    <div>
                        <div className="accessories">
                            <div className="top">
                                <h2>Accessories</h2>
                            </div>
                            <div className="bot">
                                <Link className="bot__link" to='/'>Shop Now</Link>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </Carousel>
            </div>
        </Main>

    )
}

export default Home
