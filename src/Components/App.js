import '../Style/App.css';
import Navbar from '../Components/Navbar';
import Appartements from '../Components/Appartements'
import Footer from '../Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Appartements/>
      <Footer/>
    </div>
  );
}

export default App;
