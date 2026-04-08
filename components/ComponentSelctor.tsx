import React from 'react'
import BeforeAfter from './SetupTypes/BeforeAfter'
import OneRow from './SetupTypes/OneRow'
import TwoRows from './SetupTypes/TwoRows'
import ThreeRows from './SetupTypes/ThreeRows'
import VideoWithTimeLine from './SetupTypes/VideoWithTimeLine'

const ComponentSelctor = ({ Project }:{Project:any}) => {
    switch(Project.SetupType) {
        case "BeforeAfter":
            return <BeforeAfter key={Project?.id} Project={Project}/>
        case "OneRow":
            return <OneRow key={Project?.id} Project={Project}/>
        case "TwoRows":
            return <TwoRows key={Project?.id} Project={Project}/>
        case "ThreeRows":
            return <ThreeRows key={Project?.id} Project={Project}/>
        case "VideoWithTimeLine":
            return <VideoWithTimeLine key={Project?.id} Project={Project}/>
        default:
            return <p>something went wrong</p>
    }
}

export default ComponentSelctor