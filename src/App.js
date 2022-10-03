

import './App.css';

/**********
 Components
***********/
import Navbar from './Components/Navbar1'

/*****
 Pages
 ****/
import Home from './Pages/Home/Home.js'
function App() {
  return (
    <div className="App">
     <Navbar />
      <Home />
    </div>
  );
}

export default App;
