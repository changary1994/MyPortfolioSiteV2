import './index.scss'
import Gif from '../../assets/images/photos/animation.gif';
import Loader from 'react-loaders'

import Snowfall from 'react-snowfall'


const About = () => {
    

    return (
        /* <> is short for "React.Fragment", which essentially wraps the entire component as a div. This is the only way to have React work properly, because React basically loads entire components as divs. */
        <>
        {/* The className allows me to select this specific container in order to target it for styling purposes. */}
        <div className='container about-page'>
            <div className='text-zone'>
                {/*The h1 tag is used for titles, and have the biggest font by default, although this can be changed in css. */}
                <h1>
                    About me
                </h1>
                {/* a <p> element is basically a div that is specifically a paragraph. */}
                <p>I am a senior CS student who is looking to start his career in Software Engineering or Game Programming. As I approach my graduation with a B.S. from Brooklyn College in Computer Science, I am seeking an internship or junior/associate position in the field that will allow me to nurture skills and gain experience that I can use to continue to enrich the lives of others. I hope to find myself a part of a friendly and positive environment that shares my love for coding, diversity, and community.</p>
            </div>
            <div className='gif-zone'>
                {/*I load my gif here, which I imported from my assets folder. */}
                <img src={Gif} alt='Gif'></img>
            </div>
           
        </div>
         {/* I load the snowfall package and the loader on the page by calling them from the import. */}
        <Loader type="ball-pulse-sync"/>
        <Snowfall />
        </>
    )
}

export default About