import React from 'react'

function Exterior({ model }) {
    return (
        <div>
            <div className="tesla-red">
                <div className="tesla-red__perf">
                    <p>Performance-focused chassis</p>
                </div>
                <div className="tesla-red__perf">
                    <h2>{model?.longRange?.dragCoef}</h2>
                    <p>Lowest-drag car on Earth</p>
                </div>
                <div className="tesla-red__perf">
                    <p>Refined exterior styling</p>
                </div>
            </div>
        </div>
    )
}

export default Exterior
