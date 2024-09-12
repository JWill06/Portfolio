import { useState } from 'react'
import './Projects.css'
import { ProjectModal } from './ProjectModal'
const Projects = ({project}) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className='preview'>
            <h1>{project.name}</h1>
            <div className='imageContainer'>
                <img className="gif" src={`${process.env.PUBLIC_URL}${project.gif}`} alt="preview" />
                <button className='detailsButton' onClick={() => setModalOpen(!modalOpen)}>View More Details</button>
            </div>
            {modalOpen && <ProjectModal project={project} setIsOpen={setModalOpen} />}
        </div>
    )
}

export default Projects