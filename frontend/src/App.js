import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/HomeScreen';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <main className='py-3'>
      <Container>
        <Routes>
          <Route path='/' Component={HomeScreen} exact />
          <Route path='/login' Component={LoginScreen} exact />
          <Route path='/product/:id' Component={ProductScreen} exact /> 
          <Route path='/cart/:id?' element={<CartScreen />} exact />

        </Routes>
        
      </Container>
      </main>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
