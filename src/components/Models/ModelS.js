import React, { useState, useEffect } from 'react';
import { Main } from '../../Style/ModelS'
import OrderDiv from '../../Containers/OrderDiv';
import Footer from '../../Containers/Footer';
import Header from '../Models/Divisions/Header';
import Interior from '../Models/Divisions/Interior';
import Interface from '../Models/Divisions/Interface';
import Services from '../Models/Divisions/Services';
import Plaid from '../Models/Divisions/Plaid';
import Powertrain from '../Models/Divisions/Powertrain';
import Exterior from '../Models//Divisions//Exterior';
import ServicesMore from '../Models/Divisions/ServicesMore';
import LongRange from '../Models/Divisions/LongRange';
import Travel from '../Models/Divisions/Travel';
import Safety from '../Models/Divisions/Safety';
import Autopilot from '../Models/Divisions/Autopilot';
import Features from '../Models/Divisions/Features';
import Specs from '../Models/Divisions/Specs';
import Subfooter from '../Models/Divisions/Subfooter';



function ModelS() {

    const [model, setModel] = useState({});

    useEffect(() => {
        fetch("/API/ModelS.json")
            .then((res) => res.json())
            .then((data) => {
                setModel(data)
            });
    }, []);

    return (
        <Main>

            <Header
                model={model}
            />
            <Interior />
            <Interface />
            <Services />
            <Plaid
                model={model}
            />
            <OrderDiv
                heading5="Plaid"
                heading1="Beyond Ludicrous"
                describtion="With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs."
            />
            <Powertrain
                model={model}
            />
            <Exterior
                model={model}
            />
            <OrderDiv
                heading5="Exterior"
                heading1="Designed for Efficiency"
                describtion="With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever."
            />
            <ServicesMore />
            <LongRange
                model={model}
            />
            <Travel />
            <Safety />
            <Autopilot />
            <OrderDiv
                heading5="Autopilot"
                heading1="Future of Driving"
                describtion="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly."
            />
            <Features />
            <Specs
                model={model}
            />

            <Subfooter />
            <Footer />
        </Main >

    )
}

export default ModelS
