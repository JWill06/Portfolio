import GitHub from '../images/icons8-github.svg'
import js from '../images/icons8-js.svg'
import css from '../images/icons8-css-100.svg'
import html from '../images/icons8-html.svg'
import react from '../images/icons8-react-js-40.png'
import typescript from '../images/icons8-typescript-48.png'
import './Projects.css'

const Projects = ({project}) => {
    const frameWorks = [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "React", icon: react },
        { name: "Typescript", icon: typescript}
    ]
    return (
        <div className='preview'>
            <div className='imageContainer'>
                <img className="gif" src={`${process.env.PUBLIC_URL}${project.gif}`} alt="preview" />
            </div>
            <div className='text'>
            <h1>{project.name}</h1>
                <p>{project.description}</p>
                <h2>Built with</h2>
                {frameWorks.map(({ name, icon }) => 
                    project.built.includes(name) ? (
                        <img className='icons' alt={name} src={icon} />
                    ) : null
                )}
            <div>
                </div>
                <p><strong>GitHub repo link, click on the GitHub icon below!</strong></p>
                <a href={project.repo_link}>
                    <img className='link' alt='github link'src={GitHub} />
                </a>
                {project.deployed_link === "https://jwill06.github.io/tic-tac-toe/" ? <div><p><strong>Click on the Taco emoji to play!</strong></p> <a className="deployedLink" href={project.deployed_link}>🌮</a></div> : null}
                {project.deployed_link === "https://jwill06.github.io/coloRandom/" ? <div><p><strong>Click on any Colored Box emoji to make some pallettes!</strong></p> <a className="deployedLink" href={project.deployed_link}>🟦 🟧 🟨 🟩</a></div> : null}
                {project.deployed_link === "https://art-collector-ten.vercel.app" ? <div><p><strong>Click on the art to see some art!</strong></p> <a className="deployedLink" href={project.deployed_link}>🖼️</a></div> : null}
                {project.repo_link === "https://github.com/JWill06/Remote-Job-Locator" ? <div><p><strong>Click on the remote workers to find some postings!</strong></p> <a className="deployedLink" href={project.deployed_link}>👨🏽‍💻👨🏻‍💻👩🏼‍💻👩🏽‍💻</a></div> : null}
            </div>
            {project.funny ? <p className='hidden funny'>{project.funny}</p> : null}
        </div>
    )

}

export default Projects