import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import NavBar from './components/NavBar';
import ComputersContainer from './components/ComputersContainer';
import Computer from './components/Computer'
import TabletsContainer from './components/TabletsContainer';
import WorkstationsContainer from './components/WorkstationContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="homepage">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/computer" element={<ComputersContainer/>} />
            <Route path="/computer/:computerId" element={<Computer/>}></Route>
            <Route path="/tablet" element={<TabletsContainer/>} />
            <Route path="/workstation" element={<WorkstationsContainer/>} />
          </Routes>           
        </div>
      </div>
    </Router>
  );
}

export default App;
