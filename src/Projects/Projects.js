import GitHub from '../images/icons8-github.svg'
import js from '../images/icons8-js.svg'
import css from '../images/icons8-css-100.svg'
import html from '../images/icons8-html.svg'
import './Projects.css'
import { NavLink } from 'react-router-dom'

const Projects = ({project}) => {
    return (
        <div className='preview'>
            <div className='imageContainer'>
                <img className="gif" src={`${process.env.PUBLIC_URL}${project.gif}`} alt="preview" />
            </div>
            <div className='text'>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <h2>Built with</h2>
                <img className='icons' alt='javascript icon' src={js} />
                <img className='icons' alt='css icon' src={css} />
                <img className='icons' alt='html icon' src={html} />
            <div>
                </div>
                <p>GitHub repo link, click on the GitHub icon below!</p>
                <a href={project.repo_link}>
                    <img className='link' alt='github link'src={GitHub} />
                </a>
                {project.deployed_link === "https://jwill06.github.io/tic-tac-toe/" ? <div><p>Click on the Taco emoji to play!</p> <a className="deployedLink" href={project.deployed_link}>🌮</a></div> : null}
                {project.deployed_link === "https://jwill06.github.io/coloRandom/" ? <div><p>Click on any Colored Box emoji to make some palletts!</p> <a className="deployedLink" href={project.deployed_link}>🟦 🟧 🟨 🟩</a></div> : null}

            </div>
            {project.funny ? <p className='hidden funny'>{project.funny}</p> : null}
        </div>
    )

}

export default Projects