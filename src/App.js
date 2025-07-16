import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Bg from './pages/Bg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer';
import Textp1 from './pages/Textp1'
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './pages/About'; 


function App() {
  return (
    <Router> 
      <Bg>
      <Navbar />
      
      
<Routes>
  <Route path="/" element={
    <>
  <Textp1 />
 
      
    </>
    
    
  } />
     
        <Route path="/About" element={<About />} />
      
</Routes>
</Bg>

<Footer />

    </Router>
  );
}

export default App;