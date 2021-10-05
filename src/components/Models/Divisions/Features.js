import React, { useState } from 'react';
import Videos from '../../../Containers/Videos';


function Features() {

    const [features, setFeatures] = useState('autopilot');


    return (
        <div>
            <div className="features">
                <div className="features__desription">
                    <h1 className="features__description__heading">Features</h1>
                    <p>Full Self-Driving Capability introduces additional features and improves existing functionality to make your car more capable over time including:</p>
                </div>
                <div className="features__video">
                    <Videos data={features} />
                </div>

                <div className="features__type">
                    <div
                        onClick={() => { setFeatures('autopilot') }}
                        className={`features__type__card ${features === 'autopilot' ? 'card-active' : ''}`}>
                        <h3>Navigate on Autopilot</h3>
                        <p>Active  guidance from on-ramp to off-ramp</p>
                    </div>
                    <div
                        onClick={() => { setFeatures('laneChange') }}
                        className={`features__type__card ${features === 'laneChange' ? 'card-active' : ''}`}>
                        <h3>Auto Lane Change</h3>
                        <p>Automatically change lanes while driving on the highway</p>
                    </div>
                    <div
                        onClick={() => { setFeatures('summon') }}
                        className={`features__type__card ${features === 'summon' ? 'card-active' : ''}`}>
                        <h3>Summon</h3>
                        <p>Automatically retrieve your car</p>
                    </div>
                    <div
                        onClick={() => { setFeatures('autopark') }}
                        className={`features__type__card ${features === 'autopark' ? 'card-active' : ''}`}>
                        <h3>Autopark</h3>
                        <p>Parallel and perpendicular parking with a single touch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
