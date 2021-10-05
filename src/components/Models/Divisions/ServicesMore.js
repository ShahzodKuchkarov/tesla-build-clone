import React from 'react';
import Performance from '../../../Assets/tesla_performance.jpg';
import Aerod from '../../../Assets/tesla_aerodyn.jpg';
import Styling from '../../../Assets/tesla_styling.jpg';

function ServicesMore() {
    return (
        <div>
            <div className="services">
                <div className="services__main-perf flex">
                    <div className="services__main-perf-info info">
                        <h2>
                            Responsive Performance
                        </h2>
                        <p>
                            Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.
                        </p>
                    </div>
                    <div className="services__main-perf-img">
                        <img src={Performance} alt="" />
                    </div>
                </div>
                <div className="services__main-aerod flex">
                    <div className="services__main-game-img">
                        <img src={Aerod} alt="" />
                    </div>
                    <div className="services__main-aerod-info info">
                        <h2>
                            Optimized Aerodynamics
                        </h2>
                        <p>
                            Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.
                        </p>
                    </div>
                </div>
                <div className="services__main-styling flex">
                    <div className="services__main-styling-info info">
                        <h2>
                            Redefined Styling
                        </h2>
                        <p>
                            Exteroir design combines an iconic look with elegant proportions
                        </p>
                    </div>
                    <div className="services__main-styling-img">
                        <img src={Styling} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesMore
