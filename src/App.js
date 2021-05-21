import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Contact from './components/contact'
import './App.css'

  

function App() {
  return (
    <BrowserRouter>

    
    
    <div>

    
        <Navbar />
    
   
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about'  component={About} />
        <Route path='/projects'  component={Projects} />
        <Route path='/contact'  component={Contact} />

      </Switch>

    


    </div>

   

   

   
   
     


    </BrowserRouter>
  );
  
}



export default App;
