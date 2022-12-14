import './index.scss'
import Loader from 'react-loaders';
import Snowfall from 'react-snowfall';

const Homework = () => {

    return (
        <>
         {/* I load the snowfall package and the loader on the page by calling them from the import. */}
            <Snowfall />
            <Loader type="ball-pulse-sync" />
             {/* The className allows me to select this specific container in order to target it for styling purposes. */}
            <div className='container homework-page'>
                <div className='text-zone'>
                     {/*The h1 tag is used for titles, and have the biggest font by default, although this can be changed in css. */}
                    <h1>
                        Homework
                    </h1>
                     {/* a <p> element is basically a div that is specifically a paragraph. */}
                    <p id="firstP">This page is to provide links to homework assignments for CISC 3610 with Professor Goetz. If you are a recruiter, employer, or Jeff Bezos, please turn back now.</p>
                    {/* a ul is an unordered list, as opposed to an <ol>. Both would use <li> for list items. */}
                    <ul>
                        {/* I create list elements to organize my links. I can also target specifically the list item, or the link itself, by selecting either the <li> or <a> in css. */}
                        <li><p>
                            <a href="https://changary1994.github.io/CartoonHW/">Cartoon Drawing</a>
                            </p>
                        </li>
                        <li>
                            <p id="firstP">Animation HW - For this assignment, I implemented the spinning cube in my About page using the techniques taught in class. I used @keyframes in CSS, and using imported images, move their position over the course of the animation, which will reset and loop endlessly. </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/FormsHW/">Text Form</a>
                            </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/Speech-Recognition-HW/">Speech Recognition</a>
                            </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/DataVisualization/">Data Visualization</a>
                            </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/AnimationHW/">Video Animation</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Homework