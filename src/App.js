import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Overview from './Overview';
import OurWork from './OurWork';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Overview/>
        <OurWork/>
        <AboutUs/>
        <ContactUs/>
      </header>
    </div>
  );
}

export default App;
