import './App.css';
import AddTask from './components/AddTask';
import Home from './components/Homepage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Router>
    <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add-task' element={<AddTask />} exact />
    </Routes>
    </Router>
  </div>
  );
}
export default App;