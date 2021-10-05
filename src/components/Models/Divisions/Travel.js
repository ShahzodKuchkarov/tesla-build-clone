import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Map from '../../../Containers/Map';

function Travel() {
    const [cityFrom, setCityFrom] = useState('sanJose');
    const [cityTo, setCityTo] = useState('losAngeles');

    return (
        <div>
            <div className="travel">
                <div className="travel__desription">
                    <h1 className="travel__description__heading">Freedom to Travel</h1>
                    <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.</p>
                </div>
                <div className="travel__map">
                    <Map data={[cityFrom, cityTo]} />
                </div>
                <div className="travel__destinations">
                    <div
                        onClick={() => { setCityTo('losAngeles'); setCityFrom('sanJose') }}
                        className={`travel__destinations__card ${cityTo === 'losAngeles' ? 'card-active' : ''}`}>
                        <p>San Jose to Los Angeles</p>
                        <div>
                            <spand className="large">340</spand>  <span>miles</span>
                        </div>
                    </div>
                    <div
                        onClick={() => { setCityTo('tahoe'); setCityFrom('berkley') }}
                        className={`travel__destinations__card ${cityTo === 'tahoe' ? 'card-active' : ''}`}>
                        <p>Berkeley to Lake Tahoe</p>
                        <div>
                            <spand className="large">178</spand>  <span>miles</span>
                        </div>
                    </div>
                    <div
                        onClick={() => { setCityTo('boston'); setCityFrom('manhattan') }}
                        className={`travel__destinations__card ${cityTo === 'boston' ? 'card-active' : ''}`}>
                        <p>Manhattan to Boston</p>
                        <div>
                            <spand className="large">211</spand>  <span>miles</span>
                        </div>
                    </div>
                    <div
                        onClick={() => { setCityTo('orlando'); setCityFrom('fortLauderdale') }}
                        className={`travel__destinations__card ${cityTo === 'orlando' ? 'card-active' : ''}`}>
                        <p>Fort Lauderdale to Orlando</p>
                        <div>
                            <spand className="large">195</spand>  <span>miles</span>
                        </div>
                    </div>
                </div>
                <Link className="order-now">Learn more</Link>
            </div>
        </div>
    )
}

export default Travel
