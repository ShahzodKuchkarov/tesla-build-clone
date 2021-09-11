import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../Style/HomeCard';

function HomeCard({ model, info, link, view, inventory, inventory__link, view__link, className, shop, shop__link }) {
    return (
        <Main className={className}>

            <div className="top">
                <h2>{model}</h2>
                <p>{info} <Link>{link}</Link> </p>
            </div>
            <div className="bot">
                <Link to={view__link} className="bot__1">{view}</Link>
                <Link to={inventory__link} className="bot__2">{inventory}</Link>
                <Link to={shop__link}>{shop}</Link>
            </div>
        </Main>
    )
}

export default HomeCard
