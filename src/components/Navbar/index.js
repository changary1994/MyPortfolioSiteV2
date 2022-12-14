import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSubtitle from "../../assets/images/logo_sub.png"
/*Import the fonts and icons from FontAwesome. */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faBook, faVial } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (

    /*The Navb */
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img className="sub-logo" src={LogoSubtitle} alt="gary" />
        </Link>

        <nav>
            <NavLink exact={true} activeclassname="active" className="home-link" to="/" end>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="homework-link" to="/homework">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="labs-link" to="/labs">
                <FontAwesomeIcon icon={faVial} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                {/* target specifies where to open the link to; _blank opens the link to a new page. rel is necessary for a link between two pages. */}
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/changary1994/">
                    {/* The icons previously imported are used here. I change the color inline as well. */}
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/changary1994">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://changary1994.itch.io/">
                    <FontAwesomeIcon icon={faItchIo} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Navbar