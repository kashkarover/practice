import './App.scss';
import Info from './components/About/Info';
import Me from './components/About/Me';
import Header from './components/Header';
import Links from './components/Links';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='about'>
        <Links />
        <Me />
        <Info />
      </div>
    </div>
  );
}

export default App;
