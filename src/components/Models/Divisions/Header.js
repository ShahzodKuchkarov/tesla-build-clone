import React from 'react';
import { Link } from 'react-router-dom';





function Header({ model }) {
    return (
        <div>
            <div className="modelS">
                <div className="modelS__top">
                    <h2>{model.name}</h2>
                    <p>Plaid</p>
                </div>
                <div className="modelS__bot">
                    <ul>
                        <li>
                            <h3>{model?.plaid?.range}</h3>
                            <h4>Range (EPA est.)</h4>
                        </li>
                        <li>
                            <h3>{model?.plaid?.acceleration}</h3>
                            <h4>0-60 mph*</h4>
                        </li>
                        <li>
                            <h3>{model?.plaid?.topSpeed}</h3>
                            <h4>Top Speed*</h4>
                        </li>
                        <li>
                            <h3>{model?.plaid?.peakPower}</h3>
                            <h4>Peek Power</h4>
                        </li>
                        <li className="models__bot-link">
                            <Link>Order Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
