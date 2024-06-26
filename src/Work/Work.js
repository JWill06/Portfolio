import './Work.css'
import data from '../Project Data/data.json'
import Projects from '../Projects/Projects'

const Work = () => {

    return (
        <div className='Work'>
            <h1>MY WORK</h1>
            {data.map(project => <Projects project={project}/>)}

        </div>
    )
}

export default Work 