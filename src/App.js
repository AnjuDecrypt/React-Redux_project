
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import User from './Components/User';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      {/* <User  data={{name: 'ankit'}}/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
