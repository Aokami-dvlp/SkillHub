import InsertDev from './views/InsertDev'; 
import TableView from './views/TableView';
import Dashboard from "./views/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';




function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<InsertDev/>} />
        <Route path="/table" element={<TableView/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Navbar/>
    </Router>
    </>
  )
}

export default App
