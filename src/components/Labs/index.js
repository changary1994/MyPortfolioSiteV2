import './index.scss'
import Loader from 'react-loaders';
import Snowfall from 'react-snowfall';

const Labs = () => {

    return (
        /* <> is short for "React.Fragment", which essentially wraps the entire component as a div. This is the only way to have React work properly, because React basically loads entire components as divs. */
        <>
        {/* I load the snowfall package and the loader on the page by calling them from the import. */}
            <Snowfall />
            <Loader type="ball-pulse-sync" />
            <div className='container homework-page'>
                <div className='text-zone'>
                    <h1>
                        Labs
                    </h1>
                    <p id="firstP">This page is to provide links to lab assignments for CISC 3610 with Professor Goetz. If you are a recruiter, employer, or Jeff Bezos, please turn back now.</p>
                    <ul>
                        <li>
                            <a href="https://changary1994.github.io/JSONLab/">JSON Lab</a>  
                        </li>
                        <li>
                            <a href="https://changary1994.github.io/AudioLab/">Audio Lab</a>  
                        </li>
                        <li>
                            <p id="resumeP">Resume Lab - You're looking at it!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Labs