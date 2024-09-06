import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css'


function App() {
    return (
      <div>
        <NavBar />
        <main className="mx-3">
        <Outlet />
      </main>

        <Footer />
      </div>
    );
  }

export default App
