
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container mt-4'>
      <Routes>
        <Route path='/users' element={<Users />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
