import React from 'react'

function Autopilot() {
    return (
        <div>
            <div className="autopilot">
                <div className="autopilot__info">
                    <div className="autopilot__info__item">
                        <h1>360°</h1>
                        <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                    </div>
                    <div className="autopilot__info__item">
                        <h1>250m</h1>
                        <p>Powerful visual processing at up to 250 meters of range</p>
                    </div>
                    <div className="autopilot__info__item">
                        <h1>Ultrasonic
                            Sensors</h1>
                        <p>Detects nearby cars, helps prevent potential collisions and assists with parking</p>
                    </div>
                </div>
                <div className="autopilot__video">
                    <video
                        autoPlay="autoplay"
                        loop="loop"
                        muted
                        src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"
                    >

                    </video>
                </div>
            </div>
        </div>
    )
}

export default Autopilot
