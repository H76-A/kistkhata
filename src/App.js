

import './App.css';

/**
 * Bootstrap
 */

 import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
/**********
 Components
***********/

import Navbar2 from './Components/Navbar2';
import Footer from './Components/Home/Footer'
/*****
 Pages
 ****/
import Home from './Pages/Home/Home.js'
import ForBusiness from './Pages/ForBusiness/ForBusiness.js'
import ForCustomer from './Pages/ForCustomer/ForCustomer';
import ForBlogs from './Pages/ForBlogs/ForBlogs'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Navbar2 />

        <Routes>
          <Route  path="/"  element={<Home />} />
          <Route path="/forbusiness" element={<ForBusiness />}/>
          <Route path="/forcustomer" element={<ForCustomer />} />
          <Route path='/forblogs' element={<ForBlogs />} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
