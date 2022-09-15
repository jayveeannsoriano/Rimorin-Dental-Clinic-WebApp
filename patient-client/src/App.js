import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard';
// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom;'
import {DataTable} from "simple-datatables"

/*eslint no-unused-vars: "off"*/
function App() {

  // Data Table for Appointments
  const myTable = document.querySelector(".table");
  const dataTable = new DataTable(myTable); 
  
  // Pages
  return (
    <div className="App">
        <Dashboard />
    </div>
  );
}

export default App;
