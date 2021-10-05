import React from 'react'
import { Link } from 'react-router-dom'

function Safety() {
    return (
        <div>
            <div className="safety">
                <div className="safety__left">
                    <div>
                        <h3>Range</h3>
                        <h1>Go Anywhere</h1>
                        <p>
                            Travel farther on a single charge than any other electric vehicle—and keep going with access to 25,000+ Superchargers globally. By combining up to 405 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.
                        </p>
                    </div>
                    <div>
                        <Link className="order-now">Order Now</Link>
                    </div>
                </div>
                <div className="safety__right">
                </div>
            </div>
        </div>
    )
}

export default Safety
