
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import User from './Components/User';
// import Home from "./Components/Home";
import HomeContainer from './Container/HomeContainer';
import HeaderContainer from './Container/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <User  data={{name: 'ankit'}}/> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/HeaderContainer' element={<HeaderContainer />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
