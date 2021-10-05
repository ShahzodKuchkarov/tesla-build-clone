import React from 'react';
import { Carousel } from 'antd';

function Interface() {
    return (
        <div>
            <div className="interface">
                <Carousel autoplay>
                    <div className="interface__slider slider-1">
                        <div className="interface__slider-info">
                            <h3>
                                17” Cinematic Display
                            </h3>
                            <p>
                                With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere.
                            </p>
                        </div>

                    </div>
                    <div className="interface__slider slider-2">
                        <div className="interface__slider-info">
                            <h3>
                                Focus on Driving
                            </h3>
                            <p>
                                The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in.
                            </p>
                        </div>

                    </div>
                    <div className="interface__slider slider-3">
                        <div className="interface__slider-info">
                            <h3>
                                Perfect Environment
                            </h3>
                            <p>
                                Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.
                            </p>
                        </div>

                    </div>
                    <div className="interface__slider slider-4">
                        <div className="interface__slider-info">
                            <h3>
                                Redesigned Second Row
                            </h3>
                            <p>
                                Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.
                            </p>
                        </div>

                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Interface
