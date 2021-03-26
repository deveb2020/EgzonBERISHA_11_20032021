import '../Style/App.css';
import Navbar from '../Components/Navbar';
import Appartements from '../Components/Appartements'
import Footer from '../Components/Footer'
import About from '../Components/About'
import PageNotFound from '../Components/pageNotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppartementDetails from '../Components/Appartement-details'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Appartements/>
                    </Route>
                    <Route exact path="/EgzonBERISHA_11_20032021">
                         <Appartements/>
                    </Route>
                    <Route exact path="/About">
                        <About/>
                    </Route>
                    <Route exact path="/appartement/:id" render={(props) => <AppartementDetails {...props}/>} />
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
