import React from 'react';
import { Main } from '../Style/Navbar';
import Logo from '../Assets/logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Main>
            <div className="navbar">
                <div className="navbar__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navbar__products">
                    <ul className="navbar__products__list">
                        <li className="navbar__products__list__item">
                            <Link>
                                Model S
                            </Link>
                        </li>
                        <li className="navbar__products__list__item">
                            <Link>
                                Model 3
                            </Link>
                        </li>
                        <li className="navbar__products__list__item">
                            <Link>
                                Model X
                            </Link>
                        </li>
                        <li className="navbar__products__list__item">
                            <Link>
                                Model Y
                            </Link>
                        </li>
                        <li className="navbar__products__list__item">
                            <Link>
                                Solar Roof
                            </Link>
                        </li>
                        <li className="navbar__products__list__item">
                            <Link>
                                Solar Panels
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar__menu">
                    <ul className="navbar__menu__list">
                        <li className="navbar__menu__list__item">
                            <Link>
                                Shop
                            </Link>
                        </li>
                        <li className="navbar__menu__list__item">
                            <Link>
                                Account
                            </Link>
                        </li>
                        <li className="navbar__menu__list__item">
                            <Link>
                                Menu
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </Main>
    )
}

export default Navbar
