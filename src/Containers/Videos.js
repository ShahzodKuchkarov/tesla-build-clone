import React from 'react';
import Autopilot from '../Assets/Videos/autopilot.mp4';
import LaneChange from '../Assets/Videos/laneChange.mp4';
import Summon from '../Assets/Videos/summon.mp4';
import Autopark from '../Assets/Videos/autopark.mp4';

function Videos({ data }) {

    const features = {
        autopilot: Autopilot,
        laneChange: LaneChange,
        summon: Summon,
        autopark: Autopark
    }
    return (
        <div>
            <video
                autoPlay="autoplay"
                loop="loop"
                muted
                src={features[data]}></video>
        </div>
    )
}

export default Videos
