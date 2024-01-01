import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import NavBar from './components/NavBar';
import ComputersContainer from './components/ComputersContainer';
import TabletsContainer from './components/TabletsContainer';
import WorkstationsContainer from './components/WorkstationContainer';
import HardserverContainer from './components/HardserverContainer';
import ComputerDetails from './components/ComputerDetails';
import HardserverDetails from './components/HardserverDetails'
import TabletDetails from './components/TabletDetails';
import WorkstationDetails from './components/WorkstationDetails';


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
            <Route path="/computer/:computerId" element={<ComputerDetails/>}></Route>
            <Route path="/tablet" element={<TabletsContainer/>} />
            <Route path="/tablet/:tabletId" element={<TabletDetails/>} />
            <Route path="/workstation" element={<WorkstationsContainer/>} />
            <Route path="/workstation/:workstationId" element={<WorkstationDetails/>} />
            <Route path="/hardserver" element={<HardserverContainer/>} />
            <Route path="/hardserver/:hardserverId" element={<HardserverDetails/>} />
          </Routes>           
        </div>
      </div>
    </Router>
  );
}

export default App;
