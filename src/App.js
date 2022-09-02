import './App.css';
import DrfApiFetch from './components/DrfApiFetch';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light shadow">
        <div className="container-fluid">
          <a className="navbar-brand">
            レセ電コード検索 
          </a>
        </div>
      </nav>
      <DrfApiFetch />
    </div>
  );
}

export default App;
