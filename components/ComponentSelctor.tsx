import React from 'react'
import BeforeAfter from './SetupTypes/BeforeAfter'
import ThreeRows from './SetupTypes/ThreeRows'
import VideoWithTimeLine from './SetupTypes/VideoWithTimeLine'

const ComponentSelctor = ({ project}:{project:any}) => {
    switch(project.SetupType) {
        case "BeforeAfter":
            return <BeforeAfter key={project?.id} project={project}/>
        case "ThreeRows":
            return <ThreeRows key={project?.id} project={project}/>
        case "VideoWithTimeLine":
            return <VideoWithTimeLine key={project?.id} project={project}/>
        default:
            return <p>something went wrong</p>
    }
}

export default ComponentSelctor