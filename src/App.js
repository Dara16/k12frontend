import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import ComputersContainer from './components/ComputersContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="homepage">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/computer" element={<ComputersContainer/>} />
            <Route path="/computer/:computerId"></Route>
          </Routes>           
        </div>
      </div>
    </Router>
  );
}

export default App;
