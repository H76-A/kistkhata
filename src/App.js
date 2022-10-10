

import './App.css';
import Navbar2 from './Components/Navbar2';

/**********
 Components
***********/
// import Navbar from './Components/Navbar1'

/*****
 Pages
 ****/
import Home from './Pages/Home/Home.js'
function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
     <Navbar2 />
      <Home />
    </div>
  );
}

export default App;
