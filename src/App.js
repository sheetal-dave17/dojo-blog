import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>x
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/create" component={Create} />     
            <Route path="/blogs/:id" component={BlogDetail} />    
            <Route path="*" component={NotFound} />     
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
