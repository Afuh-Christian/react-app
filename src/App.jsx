
import logo from './assets/logo192.png';
import { HashRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<div>
          
          <div className="underline">home page</div>

          <img src={logo} alt="No image" />

        </div>} />
        <Route
          path='testing'
          element={
            <div>
              <h2>testing </h2>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}


export default App;
