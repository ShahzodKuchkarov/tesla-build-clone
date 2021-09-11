import React from 'react';
import { Main } from '../Style/Footer';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Main>

            <div className="footer">
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <Link>
                            Tesla © 2021
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link>

                            Privacy & Legal
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link>
                            Contact
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link>
                            Careers
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link>
                            News
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link>
                            Engage
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link>
                            Locations
                        </Link>
                    </li>
                </ul>
            </div>

        </Main>
    )
}

export default Footer
