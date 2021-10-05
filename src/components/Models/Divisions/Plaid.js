import React from 'react';


function Plaid({ model }) {
    return (
        <div>
            <div className="tesla-blue">
                <div className="tesla-blue__power">
                    <h2>{model?.plaid?.peakPower}</h2>
                    <p>
                        Peak Power
                    </p>
                </div>
                <div className="tesla-blue__mile">
                    <h2>{model?.plaid?.quarterMile}</h2>
                    <p>
                        @155 mph 1/4 mile
                    </p>
                </div>
                <div className="tesla-blue__acc">
                    <h2>{model?.plaid?.acceleration}</h2>
                    <p>
                        0-60 mph*
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Plaid
