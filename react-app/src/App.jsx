import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Listing from './components/Listing';

function App() {
  return (
    <>
      <Header/>
      <div className = 'flex-container'>
        <SideMenu/>
        <Listing/>
      </div>
    </>
  );
}

export default App;
