import '../Home/Home.css'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const rotateWords = ["Web Developer",  "Front End Developer", "Army Veteran"]
    const [wordIndex, setWordIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [currentWord, setCurrentWord] = useState(rotateWords[wordIndex].slice(0, letterIndex))

    useEffect(() => {
        const interval = setInterval(() => {
            if (letterIndex < rotateWords[wordIndex].length) {
                setCurrentWord(prev => prev + rotateWords[wordIndex][letterIndex])
                setLetterIndex(prev => prev + 1)
            } else {
                clearInterval(interval)
                setTimeout(() => {
                    setWordIndex((prev) => (prev + 1) % rotateWords.length)
                    setLetterIndex(0)
                    setCurrentWord('')
                }, 3000) 
            }
        }, 100) 

        return () => clearInterval(interval)
    }, [wordIndex, letterIndex, rotateWords])

    return (
        <div className="Home">
            <h1 className='homeHeader'>Jordan Williamson</h1>
            <h2 className='homeHeader'>{currentWord}</h2>
            <div className="home-buttons">
                <NavLink className="button homeButton" to="/About">LEARN ABOUT ME</NavLink>
                <NavLink className="button homeButton" to="/work">SEE MY WORK</NavLink>
            </div>
        </div>
    )
}

export default Home;
