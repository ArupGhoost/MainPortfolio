import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portolio';
import Contact from './Contact';
import Error from './Error';

function App() {
     return (
    <div className="App">
    
         <Navbar />
         <Switch >
           <Route path='/' exact component={Home}/>
           <Route path='/portfolio' exact component={Portfolio}/>
           <Route path='/contact' exact component={Contact} />
           <Route component={Error} />
            </Switch>
       
       
    </div>
  );
}

export default App;
