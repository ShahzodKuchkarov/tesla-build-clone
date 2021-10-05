import React, { useState } from 'react';

function Powertrain({ model }) {

    const [powertrain, setPowertrain] = useState('longRange');

    return (
        <div>
            <div className="powertrain">
                <div className="powertrain__description">
                    <h1>Electric Powertrain</h1>
                    <p>Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>

                </div>
                <div className="powertrain__img">

                    <img src={powertrain === 'longRange' ? "https://cdn.motor1.com/images/mgl/Qz0p1/s3/2021-tesla-model-s.webp" : "https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop"} alt="" />

                </div>
                <div className="powertrain__type">
                    <div
                        onClick={() => { setPowertrain('longRange') }}
                        className={`powertrain__type__long-range powertrain-card ${powertrain === 'longRange' ? 'powertrain-card-active' : ''}`}>
                        <h3>Long Range</h3>
                        <p>
                            Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.
                        </p>
                        <div className="powertrain__type__long-range__char powertrain-card__list">
                            <div className="powertrain__type__long-range__char__acc">
                                <h2>{model?.longRange?.acceleration}</h2>
                                <p>0-60 mph</p>
                            </div>
                            <div className="powertrain__type__long-range__char__range">
                                <h2>{model?.longRange?.range}</h2>
                                <p>range (est.)</p>
                            </div>
                            <div className="powertrain__type__long-range__char__peakP">
                                <h2>{model?.longRange?.peakPower}</h2>
                                <p>peak power</p>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => { setPowertrain('plaid') }}
                        className={`powertrain__type__plaid powertrain-card ${powertrain === 'plaid' ? 'powertrain-card-active' : ''}`}>
                        <h3>Plaid</h3>
                        <p>
                            Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.
                        </p>
                        <div className="powertrain__type__long-range__char powertrain-card__list">
                            <div className="powertrain__type__long-range__char__acc">
                                <h2>{model?.plaid?.acceleration}</h2>
                                <p>0-60 mph</p>
                            </div>
                            <div className="powertrain__type__long-range__char__range">
                                <h2>{model?.plaid?.range}</h2>
                                <p>range (EPA est.)</p>
                            </div>
                            <div className="powertrain__type__long-range__char__peakP">
                                <h2>{model?.plaid?.peakPower}</h2>
                                <p>peak power</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '30px', marginBottom: '60px' }}>
                    * With rollout subtracted
                </div>
            </div>
        </div>
    )
}

export default Powertrain
