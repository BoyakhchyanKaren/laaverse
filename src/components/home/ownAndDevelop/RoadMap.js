import { Animate } from 'components/global/animation'
import React from 'react'
import RoadMapSlider from './RoadMapSlider'

const RoadMap = () => {
    return (
        <div className='container-div'>
            <div className='w-full min-h-screen h-full pt-12 relative z-20 border-t-4 border-t-primaryLight '>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 bg-primary h-1 z-99"></div>
                <Animate.FadeUp>
                    <div className='trapezoid'>
                        <h2>Road Map</h2>
                    </div>
                </Animate.FadeUp>
                <div>
                    <Animate.FadeUp>
                        <RoadMapSlider />
                    </Animate.FadeUp>
                </div>
            </div>
        </div>
    )
}

export default RoadMap