import React from 'react';
import Game from '../../../Assets/tesl_game.jpg';
import Con from '../../../Assets/tesla_connection.jpg';
import Audio from '../../../Assets/tesla_audio.jpg';
import Storage from '../../../Assets/tesla_storage.jpg';

function Services() {
    return (
        <div>
            <div className="services">
                <div className="services__main-game flex">
                    <div className="services__main-game-img">
                        <img src={Game} alt="" />
                    </div>
                    <div className="services__main-game-info info">
                        <h2>
                            Game from Anywhere
                        </h2>
                        <p>
                            Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.
                        </p>
                    </div>
                </div>
                <div className="services__main-net flex">
                    <div className="services__main-net-info info">
                        <h2>
                            Stay Connected
                        </h2>
                        <p>
                            Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.
                        </p>
                    </div>
                    <div className="services__main-net-img">
                        <img src={Con} alt="" />
                    </div>
                </div>
                <div className="services__main-audio flex">
                    <div className="services__main-game-img">
                        <img src={Audio} alt="" />
                    </div>
                    <div className="services__main-game-info info">
                        <h2>
                            Your Best Audio System
                        </h2>
                        <p>
                            Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.
                        </p>
                    </div>
                </div>
                <div className="services__main-storage flex">
                    <div className="services__main-net-info info">
                        <h2>
                            Real Storage
                        </h2>
                        <p>
                            Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.
                        </p>
                    </div>
                    <div className="services__main-net-img">
                        <img src={Storage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
