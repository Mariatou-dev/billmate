import './App.css';
import { AppRoutes } from './router/appRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
        <header className="App-header"></header>
      </div>
    </Router>

  );
}

export default App;
