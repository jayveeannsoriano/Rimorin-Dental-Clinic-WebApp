import './App.css';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom;'

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
