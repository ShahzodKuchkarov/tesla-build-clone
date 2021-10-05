import React, { useState } from 'react';

function Specs({ model }) {

    const [specs, setSpecs] = useState('plaid');


    return (
        <div>
            <div className="specs">
                <div className="specs__heading">
                    <h1>Model S <span>Specs</span></h1>
                    <div className="specs__heading__types">
                        <h3
                            onClick={() => setSpecs('plaid')}
                            className={specs === 'plaid' ? 'active' : ''}
                        >
                            Plaid
                        </h3>
                        <h3
                            onClick={() => setSpecs('longRange')}
                            className={specs === 'longRange' ? 'active' : ''}
                        >
                            Long Range
                        </h3>
                    </div>
                </div>
                {
                    specs === 'plaid' ?
                        (<div className="specs__description">
                            {console.log('ytryuytrtytrrtytry')}
                            <ul className="specs__description__list">
                                <li className="specs__description__list-item">
                                    <h2>Range</h2>
                                    <h4> {model.plaid?.range}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>1/4 Mile</h2>
                                    <h4>{model.plaid?.quarterMile}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Peak Power</h2>
                                    <h4>{model?.plaid?.peakPower}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Wheels</h2>
                                    <h4>{model?.plaid?.wheels}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Cargo</h2>
                                    <h4>{model?.plaid?.cargo}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Weight</h2>
                                    <h4>{model?.plaid?.weight}</h4>
                                </li>
                            </ul>
                            <ul className="specs__description__list">
                                <li className="specs__description__list-item">
                                    <h2>Acceleration</h2>
                                    <h4>{model?.plaid?.acceleration}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Top Speed</h2>
                                    <h4>{model?.plaid?.topSpeed}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Drag Coefficient</h2>
                                    <h4>{model?.plaid?.dragCoef}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Powertrain</h2>
                                    <h4>{model?.plaid?.powertrain}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Supercharging Max</h2>
                                    <h4>{model?.plaid?.superCharging}</h4>
                                </li>
                            </ul>
                        </div>)
                        :

                        (<div className="specs__description">
                            <ul className="specs__description__list">
                                <li className="specs__description__list-item">
                                    <h2>Range</h2>
                                    <h4> {model.longRange?.range}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Peak Power</h2>
                                    <h4>{model?.longRange?.peakPower}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Wheels</h2>
                                    <h4>{model?.longRange?.wheels}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Cargo</h2>
                                    <h4>{model?.longRange?.cargo}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Acceleration</h2>
                                    <h4>{model?.longRange?.acceleration}</h4>
                                </li>
                            </ul>
                            <ul className="specs__description__list">
                                <li className="specs__description__list-item">
                                    <h2>Top Speed</h2>
                                    <h4>{model?.longRange?.topSpeed}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Drag Coefficient</h2>
                                    <h4>{model?.longRange?.dragCoef}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Weight</h2>
                                    <h4>{model?.longRange?.weight}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Powertrain</h2>
                                    <h4>{model?.longRange?.powertrain}</h4>
                                </li>
                                <li className="specs__description__list-item">
                                    <h2>Supercharging Max</h2>
                                    <h4>{model?.longRange?.superCharging}</h4>
                                </li>
                            </ul>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Specs
