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
        <Route path="/" Component={InsertDev} />
        <Route path="/table" Component={TableView} />
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
    </Router>
    <Navbar/>
    </>
  )
}

export default App
