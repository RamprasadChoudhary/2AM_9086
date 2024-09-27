import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/HomeScreen';

function App() {
  return (
    <>
    <Header/>
    <main>
    <Container>
      <HomeScreen/>
    </Container>
    </main>
    <Footer/>

    </>
  );
}

export default App;
