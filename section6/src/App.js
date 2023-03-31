import logo from './logo.svg';
import './App.css';
import TsetConponent from './components/TestComponent';
import GetItemCopmonent from './components/GetItemComponent';
import StyledComponent from './components/StyledComponent';
import StyledUseStateProps from './components/StyledUseStateProps';
import EmotionComponent from './components/EmotionComponent';

function App() {
  return (
    <div className="App">
      <TsetConponent />
      <GetItemCopmonent />
      <StyledComponent />
      <StyledUseStateProps />
      <EmotionComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
