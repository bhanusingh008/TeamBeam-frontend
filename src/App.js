import './App.css';
import AddTask from './components/AddTask';
import Home from './components/Homepage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import { Login } from './components/login';

function App() {

  window.onerror = function(){
    return true;
  }

  return (
  <div className="App">
    <Router>
    <Routes>
          <Route path={'/'} element={<RequireAuth loginPath={'/login'}><Home /></RequireAuth>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path={'/add-task'} element={<RequireAuth loginPath={'/login'}><AddTask /></RequireAuth>}/>
    </Routes>
    </Router>
  </div>
  );
}
export default App;