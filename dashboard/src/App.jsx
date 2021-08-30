import './App.css';
import Columns from './components/Columns';

function App() {
  return (
    <div className="App">
        <h1>Dashboard</h1>
        <div className="Grid">
          <Columns className="column"/>
          <Columns className="column"/>
          <Columns className="column"/>
        </div>
    </div>
  );
}

export default App;
