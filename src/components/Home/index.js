import './index.scss';
/* import Logo from './Logo'; */
import Snowfall from 'react-snowfall';
import Loader from 'react-loaders';
import Josh from '../../assets/images/photos/Josh.jpg';
import Daniel from '../../assets/images/photos/Daniel.jpg';
import Family from '../../assets/images/photos/Family.jpg';
import SuzPhoebe from '../../assets/images/photos/SuzPhoebe.jpg';

const Home = () => {

    return (
        /* <> is short for "React.Fragment", which essentially wraps the entire component as a div. This is the only way to have React work properly, because React basically loads entire components as divs. */
        <>
         {/* The className allows me to select this specific container in order to target it for styling purposes. */}
            <div className="container home-page">
                <div className="text-zone">
                    {/*The h1 tag is used for titles, and have the biggest font by default, although this can be changed in css. */}
                    <h1>
                        Hi, I'm Gary
                        {/* br is a line break */}
                        <br />
                        Brooklyn College Student
                    </h1>
                    {/* By default, h2 tags are for subcategories, and are smaller. This, of course, can be changed in css as well. */}
                    <h2>Software Engineer</h2>
                </div>
                <div className='photo-container'>
                    <div className='photo-zone'>
                        {/* a <p> element is basically a div that is specifically a paragraph. */}
                        <p> These are the people who motivate me.</p>
                        {/* I create four divs for photos and will use this for animations. */}
                        <div className='photo1'>
                            <img className='photoImage' src={Josh} alt="My boyfriend"></img>
                        </div>
                        <div className='photo2'>
                            <img className='photoImage' src={Family} alt="My family"></img>
                        </div>
                        <div className='photo3'>
                            <img className='photoImage' src={SuzPhoebe} alt="Best friends"></img>
                        </div>
                        <div className='photo4'>
                            <img className='photoImage' src={Daniel} alt="My best friend"></img>
                        </div>
                    </div>
                </div>
                {/* <Logo /> */}
            </div>
             {/* I load the snowfall package and the loader on the page by calling them from the import. */}
            <Loader type="ball-pulse-sync" />
            <Snowfall />
        </>
    )
}

export default Home