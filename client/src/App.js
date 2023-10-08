import './App.scss';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:id" element={<CallPage />}>
        </Route>
        <Route exact path="/" element={<HomePage />}>
        </Route>
        <Route exact path="*" element={<NoMatch />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
