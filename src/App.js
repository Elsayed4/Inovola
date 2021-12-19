
import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Categories from './components/Categories/Categories.jsx';
import Applicatios from './components/Applications/Applicatios.jsx';
import Markapp from './components/MarkApps/Markapp.jsx';
import Fixed from './components/Fixed/Fixed.jsx';
function App() {
  return (
    <>
    <Header />
    <Categories />
    <Applicatios/>
    <Markapp />
    <Fixed />
    <Footer />
    </>
  );
}

export default App;
