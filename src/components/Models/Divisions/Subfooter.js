import React from 'react'
import { Link } from 'react-router-dom';
import TeslaFooter from '../../../Assets/tesla_footer.jpg';


function Subfooter() {
    return (
        <div>
            <div className="sub-footer">
                <div className="sub-footer__left">
                    <div>
                        <h1>Model S</h1>
                        <Link className="order-now">Order now</Link>
                        <Link style={{ padding: '10px 50px' }} className="order-now">Compare</Link>
                    </div>

                </div>
                <div className="sub-footer__right">
                    <img src={TeslaFooter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Subfooter
