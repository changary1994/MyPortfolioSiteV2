import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Homework from './components/Homework';
import Labs from './components/Labs';

function App() {
  return (
    <>
   {/* This is the foundation of the routing for the app. Import each element from the components that need to be routed, and create an appropriate path. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Home is the parent component, and the rest are children of home, and are linked to it. Instead of doing Home/About or Home/Portfolio for each link, I can have Home as the index and the rest path from it. */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/labs" element={<Labs />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
