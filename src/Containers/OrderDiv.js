import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../Style/OrderDiv';

function OrderDiv({ heading5, heading1, describtion, fontSize }) {
    return (
        <Main>
            <div className="order__left">
                <h3>{heading5}</h3>
                <h1 style={{ fontSize: fontSize }}>{heading1}</h1>
                <Link className="order-now">Order Now</Link>
            </div>
            <div className="order__right">
                <p>{describtion}</p>
            </div>
        </Main>


    )
}

export default OrderDiv
