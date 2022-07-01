import Achievement from './Achievement';
import './App.css';
import Blog from './Blog';
import Classes from './Classes';
import Home from './Home';
import NewNavbar from './Newnavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Coaches from './Coaches';


function App() {
  return (
    <Router>
    <div className="App">
      <NewNavbar />
      <div className='content'>
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/Blog">
            <Blog />
        </Route>

        <Route path="/Classes">
          <Classes />
        </Route>
        <Route path="/Coaches">
          <Coaches/>
        </Route>
        <Route path="/Achievement">
          <Achievement />
        </Route>
        </Switch>        
      </div>
      <Footer />
    </div>    
    </Router>

  );
}

export default App;
