import Loader from 'react-loaders';
import Snowfall from 'react-snowfall';
import './index.scss'
import Butterfly from '../../assets/images/ProjectButterfly.png'
import Pokemon from '../../assets/images/ProjectPokemonEncounter.png'

const Portfolio = () => {

    return (
        <>
        {/* Container for my portfolio page */}
            <div className='container portfolio-page'>
                {/* Text-zone className allows me to select this element in CSS and adjust its styling. */}
                <div className='text-zone'>
                    <h1>
                        Projects
                    </h1>
                    <ul>
                        
                        <li>
                            {/* In this case, because the class is used for the elements of same type, I use an id selector to target this specific element. */}
                            <img id="secondImg"className='projectImage' src={Butterfly} alt="Project Butterfly"></img>

                            <h2>
                                Project Butterfly
                            </h2>
                            <p id="secondP"> Project Butterfly is a 2.5d adventure game where I worked as a Programmer using C# and Unity. There, I collaborated with a team of 10 talented individuals, including artists, sound designers, musicians to deliver a completed product during a one month hackathon. I participated in stand-ups, conducted code reviews, designed UI, integrated physics, and fixed merge conflicts.</p>

                            <a className='endLink' href="https://mysterioushatter.itch.io/project-butterfly-nights-into-dreams-inspired-game"> Link </a>
                        </li>
                        <li>
                            <img id="thirdImg" className='projectImage' src={Pokemon} alt="Project Pokemon"></img>
                            <h2>
                                Project Pokemon
                            </h2>
                            <p id="thirdP"> A project for a web development course. The application fetches data from the public Pokemon API found <a href='https://pokeapi.co/'>here</a> to display data and images on the user's screen. </p>
                            <a className='endLink' href="https://github.com/changary1994/Lab4"> GitHub Link </a>
                        </li>
                        <li>

                            <img id="thirdImg" className='projectImage' src={Pokemon} alt="Project Pokemon"></img>

                            <h2>
                                Project Pokemon
                            </h2>
                            <p id="thirdP"> A project for a web development course. The application fetches data from the public Pokemon API found <a href='https://pokeapi.co/'>here</a> to display data and images on the user's screen. </p>

                            <a className='endLink' href="https://github.com/changary1994/Lab4"> GitHub Link </a>
                        </li>
                        <li>
                            <img id="thirdImg" className='projectImage' src={Pokemon} alt="Project Pokemon"></img>
                            <h2>
                                Project Pokemon
                            </h2>
                            <p id="thirdP"> A project for a web development course. The application fetches data from the public Pokemon API found <a href='https://pokeapi.co/'>here</a> to display data and images on the user's screen. </p>
                            <a className='endLink' href="https://github.com/changary1994/Lab4"> GitHub Link </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
            <Snowfall />
        </>
    )
};

export default Portfolio