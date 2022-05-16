import './App.css';
import Home from './componenets/home/Home';
import Navbar from './componenets/navbar/Navbar';
import Sidebar from './componenets/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Home />
       </div>
    </div>
  );
}

export default App;
