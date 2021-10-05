import React from 'react'
import { Link } from 'react-router-dom'

function LongRange({ model }) {
    return (
        <div>
            <div className="long-range-model">
                <div className="long-range-model__left">
                    <div className="long-range-model__left__list">
                        <h2>{model?.longRange?.range}</h2>
                        <p>Go anywhere with up to 405 miles of estimated range on a single charge</p>
                    </div>
                    <div className="long-range-model__left__list">
                        <h2>200mi</h2>
                        <p>Supercharge up to 200 miles in 15 minutes</p>
                    </div>
                    <div className="long-range-model__left__list">
                        <h2>25,000+</h2>
                        <p>Superchargers placed along popular routes</p>
                    </div>
                </div>
                <div className="long-range-model__right">
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
            </div>
        </div>
    )
}

export default LongRange
