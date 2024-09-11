import { useState } from 'react'
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

  return (
    <div className='modal' onClick={() => !setIsOpen}>
        <div className='textContainer'>
                <h1>{project.name}</h1>
            <div className='text'>
            <X className='close' onClick={() => setIsOpen(false)} />
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
                    <a href={project.repo_link} onClick={handleClick}>
                        <img className='link' alt='github link'src={GitHub} />
                    </a>
                    {project.deployed_link === "https://jwill06.github.io/tic-tac-toe/" ? <div><p><strong>Click on the Taco emoji to play!</strong></p> <a className="deployedLink" href={project.deployed_link}>🌮</a></div> : null}
                    {project.deployed_link === "https://jwill06.github.io/coloRandom/" ? <div><p><strong>Click on any Colored Box emoji to make some pallettes!</strong></p> <a className="deployedLink" href={project.deployed_link}>🟦 🟧 🟨 🟩</a></div> : null}
                    {project.deployed_link === "https://art-collector-ten.vercel.app" ? <div><p><strong>Click on the art to see some art!</strong></p> <a className="deployedLink" href={project.deployed_link}>🖼️</a></div> : null}
                    {project.deployed_link === "https://remote-job-locator.vercel.app/" ? <div><p><strong>Click on the remote workers to find some postings!</strong></p> <a className="deployedLink" href={project.deployed_link}>👨🏽‍💻👨🏻‍💻👩🏼‍💻👩🏽‍💻</a></div> : null}
                </div>
            </div>
    </div>
  )
}
