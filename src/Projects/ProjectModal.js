import js from '../images/icons8-js.svg'
import css from '../images/icons8-css-100.svg'
import html from '../images/icons8-html.svg'
import react from '../images/icons8-react-js-40.png'
import typescript from '../images/icons8-typescript-48.png'
import GitHub from '../images/icons8-github.svg'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import './ProjectModal.css'


export const ProjectModal = ({project, setIsOpen}) => {
    const navigate = useNavigate()
    const frameWorks = [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "React", icon: react },
        { name: "Typescript", icon: typescript}
    ]
    const handleClick = () => {
        navigate(project.repo_link)
    }
    const getDeployedLinkText = (link) => {
        switch(link) {
            case "https://jwill06.github.io/tic-tac-toe/":
                return "Click on the Taco emoji to play!";
            case "https://jwill06.github.io/coloRandom/":
                return "Click on any Colored Box emoji to make some pallettes!";
            case "https://art-collector-ten.vercel.app":
                return "Click on the art to see some art!";
            case "https://remote-job-locator.vercel.app/":
                return "Click on the remote workers to find some postings!";
            case "https://www.portersflooring-remodeling.com/":
                return "Click on the hammers to see some flooring!";
            case "https://www.handmadebyhaylee.com/":
                return "Click on the art to see some art!";
            default:
                return "Click to view the deployed project!";
        }
    }
    
    const getDeployedLinkEmoji = (link) => {
        switch(link) {
            case "https://jwill06.github.io/tic-tac-toe/":
                return "🌮";
            case "https://jwill06.github.io/coloRandom/":
                return "🟦 🟧 🟨 🟩";
            case "https://art-collector-ten.vercel.app":
                return "🖼️";
            case "https://remote-job-locator.vercel.app/":
                return "👨🏽‍💻👨🏻‍💻👩🏼‍💻👩🏽‍💻";
            case "https://www.portersflooring-remodeling.com/":
                return "🔨🔨";
            case "https://www.handmadebyhaylee.com/":
                return "🧶🧶";
            default:
                return "🔗";
        }
    }

  return (
    <div className='modal' onClick={() => !setIsOpen}>
        <div className='textContainer'>
                <h1>{project.name}</h1>
            <div className='text'>
            <X className='close' onClick={() => setIsOpen(false)} />
                    <p>{project.description}</p>
                    <h2>Tech Stack</h2>
                    {frameWorks.map(({ name, icon }) => 
                        project.built.includes(name) ? (
                            <img className='icons' alt={name} src={icon} />
                        ) : null
                    )}
                <div>
                    </div>
                    <div className='linksContainer'>
                        {project.repo_link ? 
                        <div className='repoLinkContainer'>
                        <p><strong>GitHub repo link, click on the GitHub icon below!</strong></p>
                        <a href={project.repo_link} onClick={handleClick}>
                        <img className='link' alt='github link'src={GitHub} />
                    </a>
                    </div>
                     : <p>This repo is currently private</p>}
                    <div className='deployedLinksContainer'>
                    {project.deployed_link && (
                        <div>
                            <p><strong>{getDeployedLinkText(project.deployed_link)}</strong></p>
                            <a className="deployedLink" href={project.deployed_link} target="_blank" rel="noopener noreferrer">
                                {getDeployedLinkEmoji(project.deployed_link)}
                            </a>
                        </div>
                    )}
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
