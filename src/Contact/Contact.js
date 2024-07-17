import './Contact.css'
import emailIcon from '../images/icons8-gmail-200.svg'
import GitHub from '../images/icons8-github.svg'
import linkedIn from '../images/icons8-linkedin.svg'

const Contact = () => {
    return (
        <div className='Contact'>
            <h1 className='contactHeader'>Contact me or checkout my GitHub!</h1>
            <img src={emailIcon} alt="Gmail Icon"></img>
            <p className='email'>williamsonjordan05@gmail.com</p>
            <div className='accounts'>
            <h2>Click either icon below to see my GitHub or LinkedIn!</h2>
            <a href="https://github.com/JWill06">
                <img  className='socials' src={GitHub} alt="Link to GitHub profile" />
            </a>
            <a href='https://www.linkedin.com/in/jordan-williamson-a079b3271/'>
                <img className='socials' src={linkedIn} alt="Link to linkedIn profile" />
            </a>


            </div>


        </div>
    )
}

export default Contact