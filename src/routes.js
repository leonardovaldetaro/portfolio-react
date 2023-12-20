import Contact from 'Pages/Contact';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import Projeto from 'Pages/Projeto';
import Sobre from 'Pages/Sobre';
import Thanks from 'Pages/Thanks';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='contatos' element={<Contact />} />
                    <Route path='projeto/:id' element={<Projeto />} />
                    <Route path='thanks' element={<Thanks />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
