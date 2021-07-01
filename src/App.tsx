import { Codefield } from './components/codefield/Codefield';
import './assets/styles/App.css';

function App() {
  return (
    <div className='App'>
      <Codefield value='invite' count={4}></Codefield>
    </div>
  );
}

export default App;
