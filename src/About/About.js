import photo from '../images/J&B.jpeg';
import './About.css';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="About-wrapper">
        <h1>ABOUT ME!</h1>
      <div className='second-wrapper'>
      <img src={photo} className="About-image" alt="logo" />
        <p>
          My name is Jordan, I am an Army K9 Handler Veteran and web developer. <br/>
          Pictured is myself and my Retired Military Working Dog Brenda whom I was teamed with for 6 years. <br/>
          I am driven by accessibility and user friendly applications. <br/>
          I have a goal of creating applications and websites that can help those with disabilities in this ever growing technological world. <br/>
          As someone with two special needs children I want to make things more accessible for those with different needs.
        </p>
      </div>
      <div className="navigation-links">
        <NavLink className="button workLink" to="/work">SEE MY WORK</NavLink>
        <a className='button workLink' href={`${process.env.PUBLIC_URL}/resume.pdf`}>MY RESUME</a>
        <NavLink className="button workLink" to="/contact">CONTACT ME</NavLink>
      </div>
  </div>
  );
}

export default About;
