import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../../Style/Model3';
import Safety from '../../Assets/model_3_safety.png';
import { IoSpeedometerOutline, TiWeatherPartlySunny, BsWifi, RiCarLine } from 'react-icons/all';
import OrderDiv from '../../Containers/OrderDiv';
import Info from './Divisions/Info';
import TeslaPerformace from '../../Assets/model_3_performance.jpg';
import DualMotor from '../../Assets/model_3_dual.png';
import MapImg from '../../Assets/model-3-range-map.png';
import Range from '../../Assets/model_3_range.jpg';
import Interior from '../../Assets/model_3_interior.jpg';
import Footer from '../../Containers/Footer';
import Specs from '../../Assets/model_3_specs.jpg'

function Model3() {
    return (

        <Main>
            <div className="model3 d-flex height">
                <div className="model3__top">
                    <h2>Model 3</h2>
                </div>
                <div className="model3__bot d-flex">
                    <ul className="list-design">
                        <li>
                            <h3> <IoSpeedometerOutline />   3.1s</h3>
                            <h4>0-60 mph*</h4>
                        </li>
                        <li>
                            <h3>353mi</h3>
                            <h4>Range (EPA est.)</h4>
                        </li>
                        <li>
                            <h3>AWD</h3>
                            <h4>Dual Motors</h4>
                        </li>
                        <li className="model3__bot-link">
                            <Link className="order-now-white">Order Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="safety d-flex height">
                <div className="safety__left">
                    <h2>Safety</h2>
                    <h1>Built for Safety</h1>
                    <p>
                        Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants
                    </p>
                    <div className="safety__left__rating">
                        <h1>5-Star Overall NHTSA Rating</h1>
                        <ul>
                            <li>
                                Driver <span>★ ★ ★ ★ ★</span>
                            </li>
                            <li>
                                Passenger <span>★ ★ ★ ★ ★</span>
                            </li>
                            <li>
                                Front Seat <span>★ ★ ★ ★ ★</span>
                            </li>
                            <li>
                                Reat Seat <span>★ ★ ★ ★ ★</span>
                            </li>
                            <li>
                                Rollover <span>★ ★ ★ ★ ★</span>
                            </li>
                        </ul>
                    </div>
                    <Link style={{ marginRight: '10px' }} className="order-now-black">Learn More</Link>
                    <Link className="order-now-black">Order Now</Link>
                </div>
                <div className="safety__right">
                    <img src={Safety} alt="" />
                </div>
            </div>
            <div className="performance height d-flex">
                <Info
                    background={TeslaPerformace}
                    icon={<IoSpeedometerOutline />}
                    cardTitle={`3.1s`}
                    cardText="Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds"
                    cardTitle2="353mi"
                    cardText2="Improved handling and aerodynamics allow for a top speed of 162 mph"
                    cardTitle3="AWD"
                    cardText3="Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions"

                />
                <OrderDiv
                    heading5="Performance"
                    heading1="Quickest Acceleration"
                    fontSize="23px"
                    describtion="Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds."
                />
            </div>
            <div className="dual-motor height d-flex">
                <Info
                    background={DualMotor}
                    cardTitle="2"
                    cardText="Independent motors digitally control torque to the front and rear wheels"
                    cardTitle2="10ms"
                    cardText2="Dual motors respond to changing conditions in as little as 10 milliseconds"
                    cardTitle3={<TiWeatherPartlySunny />}
                    cardText3="Unparalleled traction and control, in all weather conditions"

                />
                <OrderDiv
                    heading5="All-Wheel Drive"
                    heading1="Dual Motor"
                    fontSize="23px"
                    describtion="Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control."
                />
            </div>
            <div className="range height d-flex">
                <Info
                    background={Range}
                    cardTitle="353mi"
                    cardText="Go anywhere with up to 353 mi of estimated range on a single charge"
                    cardTitle2="15min"
                    cardText2="Recharge up to 175 mi in 15 minutes at Supercharger locations"
                    cardTitle3="25,000+"
                    cardText3="Superchargers placed along well-traveled routes around the world"

                />
                <div className="range__description">
                    <div className="range__description__heading">
                        <h2>Safety</h2>
                        <h1>Built for Safety</h1>
                        <p>
                            Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants
                        </p>
                    </div>
                    <div className="range__description__img">
                        <img src={MapImg} alt="" />
                    </div>
                    <Link style={{ marginRight: '10px' }} className="order-now-black">Learn More</Link>
                    <Link className="order-now-black">Order Now</Link>
                </div>
            </div>
            <div className="autopilot height d-flex">
                <ul>
                    <li>
                        <h1>360°</h1>
                        <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                    </li>
                    <li>
                        <h1>250m</h1>
                        <p>Powerful visual processing at up to 250 meters of range</p>
                    </li>
                    <li>
                        <h2>Ultrasonic
                            Sensors</h2>
                        <p>Detects nearby cars, prevents potential collisions and assists with parking</p>
                    </li>
                </ul>
                <div className="autopilot__video">
                    <video autoplay="" loop="" src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"></video>
                </div>
                <OrderDiv
                    heading5="Autopilot"
                    heading1="Future of Driving"
                    fontSize="23px"
                    describtion="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
                />
            </div>
            <div className="interior height d-flex">
                <Info
                    background={Interior}
                    cardTitle="15inch"
                    cardText="A touchscreen display designed to improve over time"
                    cardTitle2={<BsWifi />}
                    cardText2="Over-the-air software updates introduce new features, functionality and performance"
                    cardTitle3={<RiCarLine />}
                    cardText3="An expansive Glass Roof provides more headroom and UV protection"
                />
                <OrderDiv
                    heading5="Interior"
                    heading1="Built Around the Driver"
                    fontSize="22px"
                    describtion="The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat."

                />
            </div>
            <div className="specs height d-flex">
                <div className="specs__image">
                    <img src={Specs} alt="" />
                </div>
                <div className="specs__info">
                    <h1 className="specs__info__heading">
                        Model 3 <span>Specs</span>
                    </h1>
                    <div
                        style={{
                            marginBottom: '3px'
                        }}
                    >
                        <button className="specs__info__button">
                            Performance
                        </button>
                        <button className="specs__info__button">
                            Long Range AWD
                        </button>
                    </div>
                    <div>
                        <button className="specs__info__button">
                            Standard Plus
                        </button>
                        <button className="specs__info__button-compare">
                            Compare
                        </button>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </Main>

    )
}

export default Model3
