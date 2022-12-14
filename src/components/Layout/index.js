import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <div className='page'>
                {/* The outlet component is where children components are rendered. This way, the NavBar stays consistent, while the pages can change freely. */}
                <Outlet />
                <br />
            </div>
        </div>
    )
}

export default Layout