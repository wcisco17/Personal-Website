import React from "react"

import { ProjectCard } from "../components/projectContainer";


const ProjectsPost = ({ title, website, description, color, image }) => {
    return (
   <React.Fragment>
        <ProjectCard
          title={<p className="p-1" >{title}</p>} link={website} bg={color} img={image}>
                <span className="p-2" >
                    {description}
                </span>
         </ProjectCard>
  </React.Fragment>

  )
}








export default ProjectsPost;

















