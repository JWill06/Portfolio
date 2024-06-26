import './Contact.css'
import emailIcon from '../images/icons8-gmail-200.svg'
import GitHub from '../images/icons8-github.svg'

const Contact = () => {
    return (
        <div className='Contact'>
            <h1>Contact me or checkout my GitHub!</h1>
            <img src={emailIcon} alt="Gmail Icon"></img>
            <p>williamsonjordan05@gmail.com</p>
            <h2>Click the icon below to see my GitHub!</h2>
            <a href="https://github.com/JWill06">
                <img src={GitHub} alt="Link to GitHub profile"></img>
            </a>


        </div>
    )
}

export default Contact