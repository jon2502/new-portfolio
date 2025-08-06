import React from 'react'
import BeforeAfter from './SetupTypes/BeforeAfter'
import ThreeImages from './SetupTypes/ThreeImages'
import VideoWithTimeLine from './SetupTypes/VideoWithTimeLine'

const ComponentSelctor = ({ project}:{project:any}) => {
    console.log(project)
    switch(project.SetupType) {
      case "BeforeAfter":
        return <BeforeAfter key={project?.id} project={project}/>
      case "ThreeImages":
        return <ThreeImages key={project?.id} project={project}/>
      case "VideoWithTimeLine":
        return <VideoWithTimeLine key={project?.id} project={project}/>
    }
}

export default ComponentSelctor