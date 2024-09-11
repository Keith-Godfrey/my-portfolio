import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
