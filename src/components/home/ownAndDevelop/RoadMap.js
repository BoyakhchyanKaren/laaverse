import React from 'react'
import RoadMapSlider from './RoadMapSlider'

const RoadMap = () => {
    return (
        <div className='w-full min-h-screen h-full pt-12 relative z-20 border-t-4 border-t-primaryLight '>
            {/* purple border */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 bg-primary h-1 z-99"></div>
            <div className='trapezoid'>
                <h2>Road Map</h2>
            </div>
            <div>
                <RoadMapSlider />
            </div>
        </div>
    )
}

export default RoadMap