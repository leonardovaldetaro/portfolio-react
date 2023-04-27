import Contact from 'Pages/Contact';
import Home from 'Pages/Home';
import Projeto from 'Pages/Projeto';
import Sobre from 'Pages/Sobre';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='contatos' element={<Contact />} />
                    <Route path='projeto/:id' element={<Projeto />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
