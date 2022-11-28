import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import Todos from './components/Todos';

function App() {
  return (
    <div className='App container'>
      <h1>React</h1>
      {/* <Search />*/}
      <Login />
      <Todos />
    </div>
  );
}

export default App;
